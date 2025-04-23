const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


async function connectToDatabase() {
  await mongoose.connect("mongodb://127.0.0.1:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}
connectToDatabase();

app.listen(5000, () => {
  console.log('Server started on port 5000');
})

