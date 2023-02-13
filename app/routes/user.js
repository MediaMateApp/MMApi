const express = require("express");
const router = express.Router();
const {
  getUsers,
  getProfile,
  postNewUser,
} = require("../controllers/controllers");

router.get("/", getUsers);
router.get("/:id", getProfile);
router.post("/", postNewUser);

module.exports = router;
