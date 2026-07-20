import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { createSession, readSession, sessionCookie } from "@/lib/auth";
import { addUser, loadUsers, type User } from "@/lib/cloud-store";

const attempts = new Map<string, number[]>();
const NAME_PATTERN = /^[\p{L}][\p{L}\p{M}' -]{1,23}$/u;

function noStore(data: unknown, status = 200) {
  return NextResponse.json(data, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
}

function sameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  return origin === request.nextUrl.origin;
}

function allowed(request: NextRequest) {
  const address = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (attempts.get(address) || []).filter((time) => now - time < 15 * 60_000);
  if (recent.length >= 30) return false;
  recent.push(now);
  attempts.set(address, recent);
  return true;
}

function cleanName(value: unknown) {
  if (typeof value !== "string") return null;
  const name = value.normalize("NFKC").trim().replace(/\s+/g, " ");
  return NAME_PATTERN.test(name) ? name : null;
}

function currentUser(request: NextRequest, users: User[]) {
  const session = readSession(request.cookies.get(sessionCookie.name)?.value);
  return session ? users.find((user) => user.id === session.userId) : undefined;
}

export async function GET(request: NextRequest) {
  try {
    const users = await loadUsers();
    const user = currentUser(request, users.value);
    return noStore({ user: user ? { id: user.id, name: user.name } : null, hasProfiles: users.value.length > 0, capacityReached: users.value.length >= 2 });
  } catch {
    return noStore({ error: "Cloud sync is temporarily unavailable." }, 503);
  }
}

export async function POST(request: NextRequest) {
  if (!sameOrigin(request) || !allowed(request)) return noStore({ error: "Please wait a few minutes and try again." }, 429);
  try {
    const body = await request.json() as Record<string, unknown>;
    const name = cleanName(body.name);
    if (!name) return noStore({ error: "Use a valid name." }, 400);
    const users = await loadUsers();
    let user = users.value.find((item) => item.normalizedName === name.toLocaleLowerCase());
    if (!user) {
      user = { id: randomUUID(), name, normalizedName: name.toLocaleLowerCase(), createdAt: new Date().toISOString() };
      await addUser(user);
    }

    const response = noStore({ user: { id: user.id, name: user.name } });
    response.cookies.set(sessionCookie.name, createSession(user.id), sessionCookie.options);
    return response;
  } catch (error) {
  if (error instanceof Error && error.message === "PROFILE_LIMIT") return noStore({ error: "The 20-profile study space is full." }, 409);
    if (error instanceof Error && error.message === "NAME_TAKEN") return noStore({ error: "That profile already exists. Please sign in instead." }, 409);
    return noStore({ error: "Cloud sync is temporarily unavailable." }, 503);
  }
}

export async function DELETE(request: NextRequest) {
  if (!sameOrigin(request)) return noStore({ error: "Invalid request." }, 403);
  const response = noStore({ user: null });
  response.cookies.set(sessionCookie.name, "", { ...sessionCookie.options, maxAge: 0 });
  return response;
}
