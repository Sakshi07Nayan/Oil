const mongoose = require('mongoose');
const { ROLES } = require('../constants/role');

const UserSchema = new mongoose.Schema({
  name: { type: String, index: true },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: email => /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
      message: '{VALUE} is not a valid email!',
    },
  },
  password: {
       type: String,
  },
  salt: {
    type: String,
  },
  role: {
    type: String,
    enum: [ROLES.USER, ROLES.ADMIN],
    default: ROLES.USER,
  },
  status: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);