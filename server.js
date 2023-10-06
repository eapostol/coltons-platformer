const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
// establish a route for the game page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// starts the local Host listening
app.listen(PORT, () =>
  console.log(`Platformer app is listening at http://localhost:${PORT}`)
);