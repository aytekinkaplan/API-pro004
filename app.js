const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json()); // JSON parser middleware
app.use("/users", userRouter);

module.exports = app;
