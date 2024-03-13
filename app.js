const express = require("express");
const app = express();

// get the port from environment variable Helo what the fuck bro
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/ping", (req, res) => {
  res.sendStatus(500);
});

app.get("/health", (req, res) => {
  res.send("HEALTH OK");
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
