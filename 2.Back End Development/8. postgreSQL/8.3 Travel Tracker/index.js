import express from "express";
import bodyParser from "body-parser";
import db from "pg";

const app = express();
const port = 3000;

const db = pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "justdoit",
  post: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
