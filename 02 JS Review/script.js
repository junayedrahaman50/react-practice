const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);
// to take out the title
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, genres);

// Destructuring with arrays ->

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// This can be done in a better way using destructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [genres, "epic fantasy"];
// spread operator in array
const newGenres = ["epic fantasy", ...genres];
console.log(newGenres);

const updateBook = { book, moviePublicationDate: "2001-12-19" };
// console.log(updateBook);
const updateBook2 = { ...book, moviePublicationDate: "2001-12-19" };
console.log(updateBook2);
console.log(book);

const updateBook3 = {
  ...book,
  // **Adding a new property
  moviePublicationDate: "2001-12-19",
  // **Overwriting an existing property
  pages: 1210, // update/overwrites pages property of book object cause it comes last
};
console.log(updateBook3);
const updateBook4 = {
  pages: 1210, //gets updated/overwrites by pages property of book object cause it comes first
  ...book,
  moviePublicationDate: "2001-12-19",
};
console.log(updateBook4);
/* 
Same as:
const groceryList = {Beans:'3kg', Daal:'2kg', Beans:'4kg'};
undefined
console.log(groceryList);
VM279:1 {Beans: '4kg', Daal: '2kg'} 
*/

/* Ternary Operator */
/* In JS ternary operator is a very special type of operator that has 3 operands(three parts that are needed for the operator to work) */

/* 1st part condition */
/* if the condition is true the result will the value that comes after ? 
It is res*/
/* The second operand 'Over a thousand' will be the result of the operation if the condition is true, if false then the result will be 3rd operand 'less than one thousan' */
/* An operator is like a function which always returns a value. 2 + 2 will return 4 */
/* Store the result in a variable */
const pagesRange = pages > 1000 ? "Over a thousand" : "less than one thousand";
const grabYear = (str) => {
  // str.split("-")[0];
  return str.split("-")[0];
};
console.log(grabYear(publicationDate));
const summary = `${title}, ${pages}-page long book, was written by ${author} and published in ${grabYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as movie`;
// summary;
console.log(summary);

/* If else statement is a statement(not an expression) it does not return a value, So it can not be used with template literals */

/* Arrow functions introduced in ES6. Useful for writing quick and short one line function. Use it for one liner function(advice) */
// function declaration
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

// function expression
/* parameter => what we want to return */
const add = (a, b) => a + b;
const getYear = (str) => str.split("-")[0];
console.log(add(10, 19));
console.log(getYear(publicationDate));

/* If we have more than one line of code then we need to use function block. If we use the block for one liner or multiliner arroe functions we need to use the return keyword */
// e.g. returns undefined need to use return keyword
// const grabYear = (str) => {
// str.split("-")[0];
//   return str.split("-")[0];
// };
// console.log(grabYear(publicationDate));
// ===================================================================

/* Some Operators like and or or in Javascript has a feature called short-circuiting, short-circuiting in logical operators means that In ceratain conditions the operator will immedietly return the first value and not even look at the second value */
/* When first value is true the and operator will automatically return the second operand. No matter what that is*/
/* When first value is false the and operator will automatically return first value and doesn't check the second value. That is short circuiting. This acts little bit like if statement */
console.log(true && "some string"); // No short circuiting
console.log(false && "some text...."); // Short
// falsy values in js: 0, "", NaN, null, undefined, 0n: BigInt zero (0n), -0: The number negative zero (-0).

// Apart from this any value is truthy value. "Junayed" is truthy
console.log("Junayed" && "Junayed is truthy value");
console.log(0 && "Some text.."); // Short circuiting

// Or operator works exactly the opposite way
/* It short circuits when the 1st operand is true and will then return it. If 1st operand is false it will return the 2nd operand(No short circuiting)  */

console.log(true || "some text");
console.log(false || "some string");

const spanishTranslation = book.translations.spanish || "Not Translated";
// spanishTranslation;
// as undefined one of the falsy values or operator goes to the 2nd operand (No short circuiting)
console.log(spanishTranslation);

/* If there is 0 (falsy value) in first operand it will take it as falsy value and return 2nd operand. Which can lead to problem if we want to show */
// console.log(book.reviews.librarything.reviewsCount || "No Data");
// To fix this we can use Nullish Coalescing operator
// It works very similarly like or operator but it also short cicuits for some falsy values.
/* It will only return the second value when first value is null or undefined but not for zero or empty string */
// console.log(book.reviews.librarything.reviewsCount ?? "No Data");
// Prints zero

function getTotalReviewCount(book) {
  // const goodreads = book.reviews.goodreads.reviewsCount;
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  /* book number 3 only has only goodreads, so book.reviews.librarything.reviewsCount is undefined this can be fixed using optional chaining - Only check next properties of an an object if the previous one exist(not undefined or null). this means whenever book.reviews.librarything is undefined it will not even try to read reviews count out of this. As book.reviews.librarything is undefined the entire book.reviews.librarything?.reviewsCount will become undefined. This is helpful whenever we are not sure that all the values we expect exist in an object. We are not always sure about the data structure of the data we are recieving (the book may not have any goodreads, librarything review). We are not sure if book.reviws.librything or book.reviews.goodreads exist */
  /* Here we can use Nullish Coalescing operator to return 0 for undefined and null falsy values */
  // const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  // librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

/* Reduce method is most powerful array method we can implement all the other array method using reduce method */
/* Useful to perform mathematical operations with numbers. Suppose we wanted to read all the books in the array and we wanted to know how many pages we have to read. Add together all of the pages properties of the array */
const books = getBooks();
/* reduce takes a callBack function that will be executed for each element of the array, it also takes a second argument for starter value. The goal of reduce method is reduce the entire array to just one value. So here we want to get just one value from the array that is total pages of all the books combined. The 2nd argument of reduce is the starter value of the final value we want to get. The function (1st argument) we pass will get called with the current element as well as with the current value(accumulator) that starts with zero in this case  */
/* it's like 
let result = 0;
result += book.pages
where acc is like result, it's the current value of the final value that we want to get*/
/* The first value that is 0 in here can also be object or an array */
// acc = accumulator = sum
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);
