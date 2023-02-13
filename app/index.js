const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./routes/user");
const link = require("./routes/link");

// app.use("/api", (req, res) => {
//   res.send("estas haciendo una petición a la ruta api");
// });

app.use(cors());
app.use(express.json());
app.use("/user", user);
app.use("/link", link);

module.exports = app;
