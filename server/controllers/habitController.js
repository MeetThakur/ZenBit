const Habit = require("../models/Habit");

const createHabit = async (req, res) => {
  try {
    const { userId, name, startDate, endDate } = req.body;

    const habit = await Habit.create({
      userId,
      name,
      startDate,
      endDate
    });

    res.status(201).json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const completeHabit = async (req, res) => {
  try {
    const { habitId, date } = req.body;
    const habit = await Habit.findById(habitId);

    if (!habit) return res.status(404).json({ message: "Habit not found" });

    const today = new Date(date);
    const last = new Date(habit.lastCompleted || 0);

    // Prevent duplicate completion
    if (habit.completedDates.some(d => new Date(d).toDateString() === today.toDateString())) {
      return res.status(400).json({ message: "Already completed for today" });
    }

    // Update streak (check if completed yesterday)
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (last.toDateString() === yesterday.toDateString()) {
      habit.streak += 1;
    } else {
      habit.streak = 1; // restart
    }

    // Level up every 5 streaks (customizable)
    if (habit.streak % 5 === 0) {
      habit.level += 1;
    }

    habit.lastCompleted = today;
    habit.completedDates.push(today);

    await habit.save();

    res.status(200).json(habit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createHabit,
  completeHabit
};