import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { after, test } from "node:test";

const environment = readFileSync(".env.local", "utf8");
const token = environment.match(/^BLOB_READ_WRITE_TOKEN=(.+)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, "");
if (!token) throw new Error("BLOB_READ_WRITE_TOKEN is required to run this integration test.");
process.env.BLOB_READ_WRITE_TOKEN = token;

const { del } = await import("@vercel/blob");
const { loadProgress, updateTopic } = await import("../lib/cloud-store.ts");
const userId = `test-${randomUUID()}`;
const testPath = `studydesk/v1/progress/${userId}.json`;

after(async () => {
  await del(testPath).catch(() => undefined);
});

test("stores rapid queued topic updates without losing earlier progress", async () => {
  await updateTopic(userId, "test-topic-one", true);
  await updateTopic(userId, "test-topic-two", true);
  await updateTopic(userId, "test-topic-three", true);

  const progress = await loadProgress(userId);
  assert.deepEqual(progress.value, {
    "test-topic-one": true,
    "test-topic-two": true,
    "test-topic-three": true,
  });
});
