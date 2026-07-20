import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_DAYS = 30;

export type Session = { userId: string; expiresAt: number };

function secret() {
  const value = process.env.STUDYDESK_AUTH_SECRET;
  if (!value || value.length < 64) throw new Error("Authentication is not configured.");
  return value;
}

function signature(value: string) {
  return createHmac("sha256", secret()).update(value).digest("base64url");
}

export function createSession(userId: string) {
  const payload = Buffer.from(JSON.stringify({ userId, expiresAt: Date.now() + SESSION_DAYS * 86_400_000 })).toString("base64url");
  return `${payload}.${signature(payload)}`;
}

export function readSession(token?: string): Session | null {
  if (!token) return null;
  const [payload, providedSignature] = token.split(".");
  if (!payload || !providedSignature) return null;
  const expectedSignature = signature(payload);
  const expected = Buffer.from(expectedSignature);
  const provided = Buffer.from(providedSignature);
  if (expected.length !== provided.length || !timingSafeEqual(expected, provided)) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Session;
    return typeof session.userId === "string" && Number.isFinite(session.expiresAt) && session.expiresAt > Date.now() ? session : null;
  } catch {
    return null;
  }
}

export const sessionCookie = {
  name: "studydesk_session",
  options: { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" as const, path: "/", maxAge: SESSION_DAYS * 86_400 },
};
