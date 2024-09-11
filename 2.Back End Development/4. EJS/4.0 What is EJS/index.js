import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    // console.log(day);

    let typ = "a weekday"
    let adv = "Its time to work hard"

    if (typ === 0 || typ === 6) {
        typ = "the weekend"
        adv = "Its time to have fun"
    }

  res.render("index.ejs", {
    dayType: typ,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});