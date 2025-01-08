//api/utils/admin.js
const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized: No user data' });
  }

  if (req.user.isAdmin) {
    return next();
  }

  res.status(403).json({ error: 'Access Denied: Admins Only' });
};

module.exports = adminOnly;
