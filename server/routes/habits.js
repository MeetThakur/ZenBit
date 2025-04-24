const express = require("express");
const { createHabit, completeHabit } = require("../controllers/habitController");

const router = express.Router();

// Route to create a habit
router.post("/", createHabit);

// Route to mark habit as completed
router.post("/complete", completeHabit);

module.exports = router;
