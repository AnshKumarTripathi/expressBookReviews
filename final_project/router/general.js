const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Check if both fields are provided
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  // Check if username already exists
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    return res.status(409).json({ message: "Username already exists" });
  }

  // Register the user
  users.push({ username, password });

  return res.status(200).json({ message: "User registered successfully" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  //Write your code here
  // return res.status(300).json({message: "Yet to be implemented"});
  res.status(200).send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  const isbn = req.params.isbn;

  if (books[isbn]) {
    res.status(200).send(JSON.stringify(books[isbn], null, 4));
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  const author = req.params.author;
  const matchingBooks = [];

  // Loop through all books
  for (let key in books) {
    if (books[key].author.toLowerCase() === author.toLowerCase()) {
      matchingBooks.push({ isbn: key, ...books[key] });
    }
  }

  if (matchingBooks.length > 0) {
    res.status(200).send(JSON.stringify(matchingBooks, null, 4));
  } else {
    res.status(404).json({ message: "No books found by that author" });
  }
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  const title = req.params.title;
  const matchingBooks = [];

  // Loop through all books
  for (let key in books) {
    if (books[key].title.toLowerCase() === title.toLowerCase()) {
      matchingBooks.push({ isbn: key, ...books[key] });
    }
  }

  if (matchingBooks.length > 0) {
    res.status(200).send(JSON.stringify(matchingBooks, null, 4));
  } else {
    res.status(404).json({ message: "No books found with that title" });
  }
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  const isbn = req.params.isbn;

  if (books[isbn]) {
    res.status(200).send(JSON.stringify(books[isbn].reviews, null, 4));
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;
