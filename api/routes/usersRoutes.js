// api/routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const requireAuth = require('../utils/auth'); // Middleware to verify JWT

const adminOnly = require('../utils/admin'); // Middleware for admin-only routes
const router = express.Router();


// ✅ Debugging middleware type
console.log('requireAuth type:', typeof requireAuth); // Should log 'function'
console.log('adminOnly type:', typeof adminOnly); // Should log 'function'

// Admin Route to Get All Users (Excludes password field for security)
//'req' in async (req, res) is not lit up in the code below
router.get('/admin/users', requireAuth, adminOnly, async (req, res) => {
  console.log(req.method); // Example: Log the HTTP method
  try {
    const users = await User.find({}, '-password');
    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Public Route to Get Basic User Info
//'req' in async (req, res) is not lit up in the code below
router.get('/users', async (req, res) => {
  console.log(req.method); // Example: Log the HTTP method
  try {
    const users = await User.find({}, 'username isAdmin');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Protected Route to Get User by ID
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id, '-password'); // Exclude the password field for security
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to Get User Count
router.get('/count', async (req, res) => {
  console.log(req.method); // Log HTTP method
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;
