import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    await fs.unlink(path.join(__dirname, "files", fileName));
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(errorMessage);
    }
  }
};

await remove();
