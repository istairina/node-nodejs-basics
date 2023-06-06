const parseArgs = () => {
  const argv = process.argv;
  const res = [];

  let i = 2;
  while (i < argv.length) {
    res.push(`${argv[i]} is ${argv[++i]}`);
    i++;
  }
  console.log(res.join(", "));
};

parseArgs();
