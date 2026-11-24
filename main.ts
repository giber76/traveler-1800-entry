import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (127 characters) explaining the modern internet to a
// traveler from 1800, using only words coined before their time:
// a library for all the world's knowledge, a letter for instant
// messages to anyone on earth — nothing after 1800 in it. "Any reader
// on earth" is the sharpening: the original said only "its reader",
// which hid the one thing that makes the internet new — a letter that
// reaches anyone, anywhere, at once.
const SENTENCE =
  "Picture a library holding every book ever written, where a letter you write reaches any reader on earth in the blink of an eye.";

const outDir = "/output";
// Guard: the gate refuses anything outside 1–200 chars or more than one
// sentence, so fail loudly here rather than shipping a bad entry.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`entry is ${SENTENCE.length} chars, must be 1–200`);
}
if ((SENTENCE.match(/\./g) ?? []).length !== 1 || !SENTENCE.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
