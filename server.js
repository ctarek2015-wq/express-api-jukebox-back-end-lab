const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const tracksRouter = require("./routers/tracksRouter");
require("./database/database");

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("", tracksRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
