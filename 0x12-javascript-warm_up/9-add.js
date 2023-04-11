#!/usr/bin/node
function add(a, b) {
  return a + b;
}
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);
if (isNaN(firstArg) || isNaN(secondArg)) {
  console.log('Please provide two integer arguments.');
} else {
  const result = add(firstArg, secondArg);
  console.log(result);
}


