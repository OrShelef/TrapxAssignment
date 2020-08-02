const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3333;
const errorController = require("./controllers/errorController");
const userRouter = require("./routes/userRoute");
const AppError = require("./utils/AppError");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/users", userRouter);
app.all("*", (req, res, next) => {
  next(new AppError(404, `${req.originalUrl} is not found`));
});
app.use(errorController.errorMiddleware);
app.get("/", async (req, res) => res.send("Hello"));
app.listen(port, () => {});

module.exports = app;
