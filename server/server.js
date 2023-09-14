// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./User'); // Import the User model

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection (replace with your MongoDB URL)
mongoose.connect('mongodb+srv://riteshsonawane622:ritesh4979@cluster0.vcbc8d0.mongodb.net/farmer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a MongoDB schema and model for user data (outside this file)

// API route for handling user signup (below this code)
// server.js (continued)

// const User = require('./User'); // Import the User model

// API route for handling user signup
app.post('/api/signup', async (req, res) => {
  try {
    // Create a new user based on the request body
    const { firstName, lastName, email, password} = req.body;
    const user = new User({ firstName, lastName, email, password});

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if a user with the provided email and password exists in the database
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If the user exists, you can generate a JWT here or create a session
    // For simplicity, we'll just send a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
