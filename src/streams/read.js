import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fullPath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = fs.createReadStream(fullPath, "utf8");
  readStream.on("data", (data) => {
    console.log(data);
  });
};

await read();
