/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element

  //store the images url in array
  let iamgeList = [
    'https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL._SX396_BO1,204,203,200_.jpg',
  ];

  // create unordered list
  let newUl = document.createElement('ul');
  newUl.style.display = 'flex';
  newUl.style.flexWrap = 'wrap'; // to be responsive on smaller screens//

  for (let i = 0; i < books.length; i++) {
    // create li
    let newLi = document.createElement('li');
    newLi.style.margin = '20px';
    newLi.style.padding = '10px';
    newLi.style.width = '350px';
    newLi.style.listStyle = 'none';

    //condition for background
    if (books[i].alreadyRead) {
      newLi.style.backgroundColor = 'green';
    } else {
      newLi.style.backgroundColor = 'red';
    }
    newUl.appendChild(newLi);

    //create p
    let newP = document.createElement('p');
    newP.innerHTML = books[i].title + ' - ' + books[i].author;
    newLi.appendChild(newP);

    //create image
    let newImg = document.createElement('img');
    newImg.src = iamgeList[i];
    newImg.alt = books[i].title;
    newImg.style.maxWidth = '50%';
    newLi.appendChild(newImg);
  }
  return newUl;
}

////
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
