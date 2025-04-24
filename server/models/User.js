const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  companions: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  level: { type: Number, default: 1 },
  completedHabits: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);
