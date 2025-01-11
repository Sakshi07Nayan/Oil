const jwt = require('jsonwebtoken');
const { ROLES } = require('../constants/role');

exports.auth = (role) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);

      if (role && decoded.role !== role) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
      }

      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };
};