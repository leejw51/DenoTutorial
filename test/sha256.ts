import { sha256 } from "https://denopkg.com/chiefbiiko/sha256@v1.0.2/mod.ts";
import { Buffer } from "https://deno.land/std/node/buffer.ts";

const a = Buffer.from([1, 2, 3]);
console.log(`SHA2-256 of ${JSON.stringify(a)}`, sha256(a, "utf8", "hex"));
