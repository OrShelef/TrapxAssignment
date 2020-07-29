const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3333;
const devenv = require("dotenv");
devenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
app.use(express.json());
app.use(cors());
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("connected");
  });

app.get("/", async (req, res) => res.send("Hello"));
app.listen(port, () => {});
