const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const userRoutes = require("./routes/users");
const habitRoutes = require("./routes/habits");

// Use Routes



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/habits", habitRoutes);

const PORT = process.env.PORT || 5000;

// Connect DB
const connectDB = require("./config/db");
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
