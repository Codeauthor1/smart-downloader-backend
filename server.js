const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const youtubeRoute = require("./src/routes/youtubeRoute");

// MIDDLE WARE
const app = express();

app.use(express.urlencoded({ extended: false }));
require("dotenv").config();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api/v1", youtubeRoute);

const PORT = 3000;

app.listen(process.env.port || PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
