/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/**
 * @author Sharina V. Jones
 */

/**
An array to hold quotes
Each quote is an object with the following properties:
  quote: a string that holds the actual quote
  source: a string with the name the person or character who said it
  citation: a string holding areference to the source of the quote, like the book, movie, or song where the quote originates (optional)
  year: a string or numberrepresenting the year the quote originated. (optional)
*/
const quotes = [
  {
    quote: "If I cannot do great things, I can do SMALL things in a great way.",
    source: "Martin Luther King Jr.",
    tag: 'Inspirational'
  },
  {
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
    source: "Audrey Hepburn",
    tag: 'Humor'
  },
  {
    quote: "I wonder if the world is tired of being greeted by me...",
    source: "Sharina V. Jones",
    tag: 'Humor'
  },
  {
    quote: "I have learned not to allow rejection to move me.",
    source: "Cicely Tyson",
    citation: "ELLE",
    tag: 'Inspirational'
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
    tag: 'Technology'
  },
];

/** 
A function to get a random quote from the quotes array
@return {object} a random quote object
*/
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

/**
 * A function to generate a random RGB color
 * @return {string} a string representing an RGB color
 */
const getRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * A function to change the background color of the page
 */
const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
}


/**
 * A function to print a random quote to the page
 */
const printQuote = () => {
  changeBackgroundColor();
  const quote = getRandomQuote();
  let html = `
  <p class="quote"> ${quote.quote} </p>
  <p class="source">${quote.source}`;
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  if (quote.tag) {
    html += `<span class="tag">${quote.tag}</span>`;
  }
  html += `</p>`;

  document.getElementById("quote-box").innerHTML = html;
};

/**
 * A timing function with the setInterval() method to print a new quote to the page at 10 seconds intervals
 */
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
