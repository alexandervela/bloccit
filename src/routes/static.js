const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

router.get("/marco", (req, res, next) => {
  res.send("polo");
});

router.get("/about", staticController.about, {h1: "About Us"});

module.exports = router;