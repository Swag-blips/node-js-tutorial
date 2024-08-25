const express = require("express");

const app = express();

app.use(express.json());

let books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "1984" },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    name: req.body.name,
  };

  books.push(newBook);
  res.status(201).send("Book successfully added");
});

app.get("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));

  if (!book) return res.status(404).send("Book not found");

  res.json(book);
});

app.put("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));

  if (!book) return res.status(404).send("Book not found!, cant be updated");
  book.name = req.body.name;

  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );

  if (bookIndex === -1) return res.status(404).send("Cant find book");

  books.splice(bookIndex, 1);
  res.status(204).send();
});

app.listen(3000, (req, res) => {
  console.log("sevrer started running on port 3000");
});
