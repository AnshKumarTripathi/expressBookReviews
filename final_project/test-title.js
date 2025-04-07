const axios = require("axios");

const title = "Things Fall Apart"; // Replace with an actual title from your booksdb

// 🔹 Async/Await version
const getBooksByTitleAsync = async (title) => {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    console.log("Books by Title (Async/Await):", response.data);
  } catch (error) {
    console.error("Error (Async/Await):", error.message);
  }
};

// 🔹 Promise-based version
const getBooksByTitlePromise = (title) => {
  axios
    .get(`http://localhost:5000/title/${title}`)
    .then((response) => {
      console.log("Books by Title (Promise):", response.data);
    })
    .catch((error) => {
      console.error("Error (Promise):", error.message);
    });
};

// Call both functions
getBooksByTitleAsync(title);
getBooksByTitlePromise(title);
