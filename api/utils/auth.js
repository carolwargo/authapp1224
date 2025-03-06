const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  console.log('Checking Authorization header...');
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log('Authorization header missing');
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.log('Token verification failed', err);  // Log the error for debugging
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decodedToken; // Attach decoded token to `req.user`
    next();
  });
};

module.exports = requireAuth;
