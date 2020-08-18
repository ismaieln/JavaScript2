/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  33

 */

function createBase(num) {
  // Put here your logic...

  return () => i * num * num + 6;
}

let b = 3;
const addSix = createBase(b);
// Put here your function calls...
for (i = 1; i <= b; i++) {
  console.log(addSix(i));
}
