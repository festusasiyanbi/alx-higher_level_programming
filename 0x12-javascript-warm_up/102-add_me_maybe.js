#@/usr/bin/node
function incrementAndCall(number, theFunction) {
  number++;
  theFunction(number);
}
incrementAndCall(5, printNumber);
