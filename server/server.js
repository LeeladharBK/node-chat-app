const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirnamer, "../public");
const PORT = procees.enc.PORT || 3000;

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Running at Port 3000");
});
