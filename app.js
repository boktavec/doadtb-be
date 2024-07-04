require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Dad to be!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
