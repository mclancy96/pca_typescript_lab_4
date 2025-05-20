// TASK:
// Define an interface Book with the following properties:
// - title: string
// - author: string
// - pages: number
// Then, create a variable called myBook of type Book and assign it a valid object.

// Your code here 👇

interface Book {
  title: string;
  author: string;
  pages: number;
}

const myBook: Book = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt",
  pages: 352,
};
