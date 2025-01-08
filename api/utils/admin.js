const adminOnly = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next(); // User is admin, proceed to the route handler
    } else {
      res.status(403).json({ error: 'Access Denied: Admins Only' });
    }
  };
  
  module.exports = adminOnly;
  