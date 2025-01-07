const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: false },
    lastname: { type: String, required: false},
    username:{type: String, required: false, unique: true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }, // New isAdmin field
  },
  { timestamps: true }
);



const User = mongoose.model('User', UserSchema);
module.exports = User;
