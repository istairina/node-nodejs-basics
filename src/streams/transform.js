import { Transform } from "stream";

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    const chunkTrimmed = chunk.toString().trim().split("").reverse().join("");
    this.push(chunkTrimmed + "\n");
    callback();
  },
});

const transform = async () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
