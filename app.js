const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD with Pull Requests!");
  res.send("what upppp");
});

module.exports = app;