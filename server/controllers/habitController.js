const Habit = require("../models/Habit");

// Controller function to create a new habit
const createHabit = async (req, res) => {
  try {
    const { userId, name, frequency, startDate, endDate } = req.body;
    const habit = new Habit({
      user: userId,
      name,
      frequency,
      startDate,
      endDate,
      progress: [],
      streak: 0
    });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to mark habit as completed
const completeHabit = async (req, res) => {
  try {
    const { habitId, date, completed } = req.body;

    const habit = await Habit.findById(habitId);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    // Add progress entry for the habit
    habit.progress.push({ date, completed });

    // Update streak logic
    if (completed) {
      const lastProgress = habit.progress[habit.progress.length - 2];
      if (lastProgress && lastProgress.completed) {
        habit.streak += 1;
      } else {
        habit.streak = 1;
      }
    }

    await habit.save();
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createHabit, completeHabit };
