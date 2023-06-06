import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinFolder = "files_copy";
const errorMessage = "FS operation failed";

const copy = async () => {
  try {
    await fs.cp(
      path.join(__dirname, "files"),
      path.join(__dirname, destinFolder),
      {
        force: false,
        errorOnExist: true,
        recursive: true,
      }
    );
  } catch (err) {
    if (err.code === "ERR_FS_CP_EEXIST" || err.code === "ENOENT") {
      throw new Error(errorMessage);
    }
  }
};

await copy();
