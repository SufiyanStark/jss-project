// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Employee schema and model using mongoose
const employeeSchema = new mongoose.Schema({
  employeeId: String,
  name: String,
  gender: String,
  designation: String,
  department: String,
  status: String,
  photo: String
});

const Employee = mongoose.model('Employee', employeeSchema);

// API Routes
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Implement other CRUD operations like POST, PUT, DELETE as needed

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
