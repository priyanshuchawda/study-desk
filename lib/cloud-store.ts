import { BlobPreconditionFailedError, get, put } from "@vercel/blob";

export type User = { id: string; name: string; normalizedName: string; createdAt: string };
type Stored<T> = { value: T; etag?: string };

const usersPath = "studydesk/v1/users.json";

async function readJson<T>(pathname: string, fallback: T): Promise<Stored<T>> {
  const result = await get(pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return { value: fallback };
  return { value: (await new Response(result.stream).json()) as T, etag: result.blob.etag };
}

async function writeJson<T>(pathname: string, value: T, etag?: string) {
  return put(pathname, JSON.stringify(value), {
    access: "private",
    allowOverwrite: true,
    cacheControlMaxAge: 60,
    contentType: "application/json",
    ...(etag ? { ifMatch: etag } : {}),
  });
}

export async function loadUsers() {
  return readJson<User[]>(usersPath, []);
}

export async function addUser(user: User) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const users = await loadUsers();
    if (users.value.length >= 2) throw new Error("PROFILE_LIMIT");
    if (users.value.some((item) => item.normalizedName === user.normalizedName)) throw new Error("NAME_TAKEN");
    try {
      await writeJson(usersPath, [...users.value, user], users.etag);
      return;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
}

const progressPath = (userId: string) => `studydesk/v1/progress/${userId}.json`;

export async function loadProgress(userId: string) {
  return readJson<Record<string, boolean>>(progressPath(userId), {});
}

export async function updateTopic(userId: string, topicId: string, completed: boolean) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const progress = await loadProgress(userId);
    const next = { ...progress.value, [topicId]: completed };
    try {
      await writeJson(progressPath(userId), next, progress.etag);
      return next;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
  throw new Error("Could not save progress.");
}

export async function clearProgress(userId: string) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const progress = await loadProgress(userId);
    try {
      await writeJson(progressPath(userId), {}, progress.etag);
      return;
    } catch (error) {
      if (!(error instanceof BlobPreconditionFailedError) || attempt === 2) throw error;
    }
  }
}
