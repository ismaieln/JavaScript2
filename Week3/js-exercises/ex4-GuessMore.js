/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
/*the output will be 9
the function f1 called but not used and we are logging the x which is global scop.
but if we do let x=f1(x); then the output will be 10.*/

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
/* x eill be 10
here we log the y so, we call the function before we log the y,
the function return the value of x as 10, then the out put will be 10.
if we log y before calling the function then the output will be 9.*/
