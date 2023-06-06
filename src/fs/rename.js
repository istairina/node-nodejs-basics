import { access } from "fs";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folder = path.join(__dirname, "files");

const choosenFileName = "wrongFilename.txt";
const newFileName = "properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    if (existsSync(path.join(folder, newFileName))) {
      throw new Error();
    }

    await fs.rename(
      path.join(folder, choosenFileName),
      path.join(folder, newFileName)
    );
  } catch (err) {
    if (err.code === "ENOENT" || !err.code) {
      throw new Error(errorMessage);
    }
  }
};

await rename();
