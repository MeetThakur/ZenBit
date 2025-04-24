const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    frequency: { type: String, enum: ["daily", "weekly", "monthly"], default: "daily" },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    progress: [
      {
        date: { type: Date, required: true },
        completed: { type: Boolean, default: false }
      }
    ],
    streak: { type: Number, default: 0 }
  });
  
module.exports = mongoose.model("Habit", habitSchema);