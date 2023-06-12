import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  let writeableStream = fs.createWriteStream(fullPath);
  process.stdin.pipe(writeableStream);
};

await write();
