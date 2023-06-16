import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

//uncomment the line below to see result with errors
// if (Math.random() > 0.8) throw new Error();

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
