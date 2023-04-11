#!/usr/bin/node

const factorial = (n) => {
  if (isNaN(n)) {
    return 1;
  } else if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(process.argv[2]));

