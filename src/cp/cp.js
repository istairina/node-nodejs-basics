import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import {stdin, stdout} from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const script = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(script, args, { silent: true, stdio: [stdin, stdout, 'pipe', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hey", "hola", "ciao"]);
