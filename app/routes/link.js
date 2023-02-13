const express = require("express");
const { getLinks } = require("../controllers/controllers");
const router = express.Router();

router.get("/", getLinks);
router.get("/single", (req, res) => {
  res.send("aqui deberia ir una fucnion mamona");
});

module.exports = router;
