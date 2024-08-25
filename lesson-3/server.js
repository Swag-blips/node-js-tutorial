const express = require("express");

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

app.get("/", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) return res.status(401).send("User not found");

  const userId = user.id;

  users = users.filter((user) => user.id !== userId);
  res.status(204).send("Successfully deleted");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
