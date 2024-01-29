// import { access } from "fs";
import fs, { access } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folder = path.join(__dirname, "files");

const oldFileName = "wrongFilename.txt";
const newFileName = "properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    const newFileExist = await fs.stat(path.join(folder, newFileName)).then((stat) => stat.isFile()).catch(() => false);
    
    if (newFileExist) {
      throw new Error();
    };

    await fs.rename(
      path.join(folder, oldFileName),
      path.join(folder, newFileName)
    );
    
  } catch (err) {
    if (err.code === "ENOENT" || !err.code) {
      throw new Error(errorMessage);
    };
  }
};

await rename();
