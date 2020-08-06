// your code goes in here
// an array contains the favorite quotes
let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    auther: "-Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    auther: "-Albert Einstein",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    auther: "-Mark Twain",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    auther: "-Mahatma Gandhi",
  },
  {
    quote:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    auther: "-Neil Gaiman, Coraline",
  },
  {
    quote: "I have not failed. I've just found 10, 000 ways that won't work.",
    auther: "-Thomas A. Edison",
  },
];

//assign variables
let quoteTextInput = document.getElementById("quoteText");
let autherTextInput = document.getElementById("autherText");
let ptns = document.getElementById("btn");

//event when loading
window.addEventListener("load", function () {
  quoteTextInput.innerHTML = quotes[5].quote;
  autherTextInput.innerHTML = quotes[5].auther;
});

// the function
ptns.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 6);
  let pickQuote = quotes[r].quote;
  let pickAuther = quotes[r].auther;
  quoteTextInput.innerHTML = pickQuote;
  autherTextInput.innerHTML = pickAuther;
  return true;
});
