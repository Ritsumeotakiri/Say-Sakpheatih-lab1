const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD with Pull Requests! rith");
});

module.exports = app;