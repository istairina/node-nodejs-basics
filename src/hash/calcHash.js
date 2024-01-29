import crypto, { createHash } from "crypto";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileFullPath = path.join(
  __dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const fileContent = await fs.readFile(fileFullPath, {
    encoding: "utf-8",
  });
  const hash = createHash("sha256").update(fileContent);
  console.log(hash.digest("hex"));
};

await calculateHash();
