import express from "express";
import { join } from "path";
const __dirname = import.meta.dirname;

const app = express();

const port = 300;

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(join(__dirname, "public", "contact.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
