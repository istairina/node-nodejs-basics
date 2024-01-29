import { cpus } from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";

const numCpus = cpus().length;

let startNum = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  const arrPromises = [];
  for (let i = 0; i < numCpus; i++) {
    const currPromise = new Promise((resolve) => {
      const worker = new Worker(source, { workerData: startNum });
      let status = "resolved";
      worker.on("message", (data) => resolve({ status: status, data }));
      worker.on("error", () =>
        resolve({
          status: "error",
          data: null,
        })
      );
    });
    arrPromises.push(currPromise);
    startNum++;
  }

  Promise.all(arrPromises).then((values) => {
    console.log(values);
  });
};

await performCalculations();
