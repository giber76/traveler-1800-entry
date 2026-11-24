import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (118 characters) explaining the modern internet to a
// traveler from 1800, using only words coined before their time:
// a library for all the world's knowledge, a letter for instant
// messages — nothing after 1800 in it.
const SENTENCE =
  "Picture a library holding every book in the world, where a letter you write reaches its reader in the blink of an eye.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
