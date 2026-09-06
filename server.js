const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
require("./database/database");

app.use(cors());
app.use(logger("dev"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
