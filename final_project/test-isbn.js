const axios = require("axios");

// Replace with any valid ISBN in your booksdb.js
const isbn = "1";

const getBookByISBN = async (isbn) => {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    console.log(`Book with ISBN ${isbn} (Async/Await):`, response.data);
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
};

getBookByISBN(isbn);
