const express = require("express");
const { createHabit, completeHabit } = require("../controllers/habitController");
const router = express.Router();

router.post("/", createHabit);
router.post("/complete", completeHabit);

module.exports = router;
