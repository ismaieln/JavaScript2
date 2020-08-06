/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

// 2.
document.body.style.fontFamily = 'Arial, sans-serif';

// 3.
document.getElementById('nickname').innerHTML = 'Ismaiel';
document.getElementById('fav-food').innerHTML = 'cheese';
document.getElementById('hometown').innerHTML = 'Den Helder';

// 4.
let ul = document.querySelector('ul');
for (let i = 0; i < 3; i++) {
  ul.children[i].className = 'list-item';
}

// 6.
let img = document.createElement('img');
img.src = 'https://i.pinimg.com/originals/82/5f/24/825f2471fe3a634b5058efbcb2039979.jpg';
img.style.maxWidth = '15%';
img.alt = 'Ismaiel Yassin';

document.body.appendChild(img);
