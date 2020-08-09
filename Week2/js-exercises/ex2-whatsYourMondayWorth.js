/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */

function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string..

  // Note:
  // not required to use map, but I put it below only as explaination

  // let rates = tasks.map((hr) => {
  //   return '€' + Math.round((hr.duration * hourlyRate * 100) / 60) / 100;
  // }); // ["€12.5","€50","€100","€25"] // ["€6.69","€26.74","€53.48","€13.37"]

  // this is the function using only reduce

  let total = tasks.reduce((grandTotal, item) => {
    return item.duration + grandTotal;
  }, 0);
  return '€' + Math.round(((total * hourlyRate) / 60) * 100) / 100;
}

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25)); // €187.5
console.log(dayWorth(mondayTasks, 13.37)); // €100.28
