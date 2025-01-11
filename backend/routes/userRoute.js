const express = require('express');
const { register, login, googleLogin,googleCallback } = require('../controllers/userController');
const { auth } = require('../middleware/authMiddleware');
const { ROLES } = require('../constants/role');
const passport = require('passport')
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/google', googleLogin);
router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallback); // Handles callback
router.get('/users', auth(ROLES.ADMIN), (req, res) => {
  res.send('Admin-only access');
});

module.exports = router;