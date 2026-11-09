const express = require("express");
const path = require("path");

const app = express();

const port = 300;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
