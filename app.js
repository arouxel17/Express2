require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5001;

const welcome = (req, res) => {
  res.send("Users list");
};

app.get("/", welcome);

const usersList = require("./usersList");

app.get("/api/users", usersList.getUsers);
app.get("/api/users/:id", usersList.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
