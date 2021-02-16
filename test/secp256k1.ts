import * as secp from "https://deno.land/x/secp256k1/mod.ts";
import { Buffer } from "https://deno.land/std/node/buffer.ts";

async function test() {
  const privateKey = Buffer.alloc(32);
  var i = 0;
  for (i = 0; i < privateKey.length; i++) {
    privateKey[i] = Math.random() * 256;
  }
  //.toString("hex");
  console.log(
    `${privateKey.toString("hex").length} , ${privateKey.toString("hex")}`
  );
  const messageHash = "9c1185a5c5e9fc54612808977ee8f548b2258d31";

  const publicKey = secp.getPublicKey(privateKey.toString("hex"));
  console.log(`pubkey ${publicKey.length},  ${publicKey} `);
  const signature = await secp.sign(messageHash, privateKey);
  const isSigned = secp.verify(signature, messageHash, publicKey);
  console.log(`signature ${signature}`);
}

test().then((result) => {
  console.log(`ok`);
});
