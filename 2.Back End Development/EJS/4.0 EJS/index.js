import express from "express"

const app = epress();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs", {
        dayType: "a weekday",
        advice: "it's time to work hard",
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

