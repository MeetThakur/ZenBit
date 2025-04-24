const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  streak: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  lastCompleted: { type: Date },
  completedDates: [{ type: Date }]
});

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;

