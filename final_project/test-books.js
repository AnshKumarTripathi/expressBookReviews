// test-books.js
const axios = require("axios");

const getBooksAsync = async () => {
  try {
    const response = await axios.get("http://localhost:5000/");
    console.log("Books (Async/Await):", response.data);
  } catch (error) {
    console.error("Error fetching books (Async):", error.message);
  }
};

const getBooksWithPromise = () => {
  axios
    .get("http://localhost:5000/")
    .then((response) => {
      console.log("Books (Promise):", response.data);
    })
    .catch((error) => {
      console.error("Error fetching books (Promise):", error.message);
    });
};

getBooksAsync();
getBooksWithPromise();
