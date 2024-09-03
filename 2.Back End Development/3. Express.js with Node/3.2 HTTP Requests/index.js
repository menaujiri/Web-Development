import express from "express";
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>My name is mena Ujiri</>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>This is my phone number</p>")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});