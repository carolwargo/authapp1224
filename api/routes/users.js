// api/routes/users.js

const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../utils/auth');
const adminOnly = require('../utils/admin');
const router = express.Router();

// Admin Route to Get All Users (with password field excluded for security)
router.get('/admin/users', authenticateToken, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password field
    res.json({ users });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Public Route to Get All Users (username and isAdmin fields only)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username isAdmin'); // Select only relevant fields
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to Get User Count
router.get('/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
