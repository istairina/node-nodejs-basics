import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = "fresh.txt";
const fileContent = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  try {
    await fs.writeFile(path.join(__dirname, "files", fileName), fileContent, {
      flag: "wx",
    });
  } catch (err) {
    if (err.code === "EEXIST") {
      throw new Error(errorMessage);
    }
  }
};

await create();
