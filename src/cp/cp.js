import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const script = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(script, args, { silent: false });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([]);
