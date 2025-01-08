// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  const token = req.cookies.token; // Assuming the JWT is stored in a cookie named 'token'

  if (!token) {
    return res.status(401).json({ error: 'Access Denied: No Token Provided' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the payload to the request object

    // Optionally, fetch the full user details from the database
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(401).json({ error: 'User Not Found' });
    }

    req.user.isAdmin = user.isAdmin; // Attach isAdmin to req.user

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Invalid Token' });
  }
};

module.exports = authenticateToken;
