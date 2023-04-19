const express = require("express");
const morgan = require("morgan");

const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);

module.exports = app;
