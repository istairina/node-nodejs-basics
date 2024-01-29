import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToCompress.txt";

const source = createReadStream(path.join(__dirname, "files", fileName));
const destination = createWriteStream(
  path.join(__dirname, "files", "archive.gz")
);

const compress = async () => {
  pipeline(source, createGzip(), destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
