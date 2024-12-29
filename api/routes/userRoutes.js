const express = require('express');
const { updateAdminStatus, getAdminDashboard } = require('../controllers/userController');
const { adminMiddleware } = require('../utils/authMiddleware');
const router = express.Router();

// Update admin status (Admin only)
router.put('/make-admin/:id', adminMiddleware, updateAdminStatus);

// Admin dashboard (Admin only)
router.get('/admin-dashboard', adminMiddleware, getAdminDashboard);

module.exports = router;
