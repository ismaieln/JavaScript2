// Your code goes in here

// declare all the required variables//
const tip = document.getElementById('tip');
const bill = document.getElementById('bill');
const service = document.getElementById('service');
const sharing = document.getElementById('sharing');
const calculate = document.getElementById('calculate');
const amount = document.getElementById('amount');
const people = document.getElementById('people');

// do the tip calculation by click the calculate function//
calculate.addEventListener('click', calculateTheTip);

//to keep the number of sharing people one or more//
sharing.addEventListener('change', changeTheLabel);

function calculateTheTip() {
  if (bill.value == ' ' || service.value == 0) {
    alert('Please fill in all the fields');
  } else {
    let tipAmount = (bill.value * service.value) / sharing.value;
    amount.innerText = tipAmount.toFixed(2);
    tip.style.display = 'block';
  }
}
function changeTheLabel() {
  if (sharing.value <= 0) {
    alert('Please enter a valid number');
    sharing.value = 1;
  }
  if (sharing.value == 1) {
    people.innerText = 'person';
  } else {
    people.innerText = 'people';
  }
}
