import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<hi>Hello</hi>");
});

app.get("/about", (req, res) => {
    res.send("<hi>About</hi>");
});

app.get("/Contact", (req, res) => {
    res.send("<hi>Contact</hi>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});