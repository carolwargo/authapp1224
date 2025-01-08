// api/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../utils/auth'); // Middleware to verify JWT
const adminOnly = require('../utils/admin'); // Middleware for admin-only routes
const router = express.Router();

// Admin Route to Get All Users (Excludes password field for security)
router.get('/admin/users', authenticateToken, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Public Route to Get Basic User Info
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username isAdmin');
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
