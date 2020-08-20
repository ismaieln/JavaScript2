/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  return [...new Set(arr)];
  // const char = arr.filter((arrItem, index) => arr.indexOf(arrItem) === index);
  // return char;
}
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
let letter = removeDuplicates(letters);
if (letter == ['a', 'b', 'c', 'd', 'e', 'f'] + []) {
  console.log('Hooray!');
}

// let letter = removeDuplicates(letters);
// if (letter.every((element, i) => element === ['a', 'b', 'c', 'd', 'e', 'f'][i])) {
//   console.log('Hooray!');
// }

// if (JSON.stringify(letter) === JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']))

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

// let letter = removeDuplicates(letters);
// if (letter == ['a', 'b', 'c', 'd', 'e', 'f'] + []) {
//   console.log('Hooray!');
// }
