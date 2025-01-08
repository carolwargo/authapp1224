// api/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuth = require('../utils/auth');
require('dotenv').config();

const router = express.Router();

// Registration Route
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const userDoc = await User.findOne({ email });
    if (!userDoc) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, userDoc.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: userDoc._id, email: userDoc.email, isAdmin: userDoc.isAdmin }, // Include isAdmin if needed
      process.env.JWT_SECRET, // Use JWT_SECRET from .env
      { expiresIn: process.env.JWT_EXPIRATION || '1h' } // Use JWT_EXPIRATION from .env or fallback to '1h'
    );

    // Send token as an HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure cookies in production
    }).json({
      message: 'Login successful',
      user: { id: userDoc._id, username: userDoc.username, email: userDoc.email },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Protected route example
router.get('/protected', requireAuth, (req, res) => {
  res.status(200).json({ message: 'Access to protected route successful!' });
});

module.exports = router;
