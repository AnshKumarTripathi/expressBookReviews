const axios = require("axios");

const author = "Unknown"; // Replace with an existing author from your booksdb

const getBooksByAuthor = async (author) => {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    console.log(`Books by ${author} (Async/Await):`, response.data);
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
};

getBooksByAuthor(author);
