import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = createReadStream(path.join(__dirname, "files", "archive.gz"));
const destination = createWriteStream(
  path.join(__dirname, "files", "fileToCompress.txt")
);

const decompress = async () => {
  pipeline(source, createUnzip(), destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await decompress();
