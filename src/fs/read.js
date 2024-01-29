import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
  try {
    const fileContent = await fs.readFile(
      path.join(__dirname, "files", fileName),
      {
        encoding: "utf-8",
      }
    );
    console.log(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(errorMessage);
    }
  }
};

await read();
