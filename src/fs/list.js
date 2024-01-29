import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorMessage = "FS operation failed";

const list = async () => {
  try {
    const fileList = await fs.readdir(path.join(__dirname, "files"));
    console.log(fileList);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(errorMessage);
    }
  }
};

await list();
