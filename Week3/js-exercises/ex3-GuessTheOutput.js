/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10; // this is global scope
const x = (function () {
  a = 12; // this is a function scope
  return function () {
    alert(a); // here a will take the value from the parents.
  };
})();

x();
