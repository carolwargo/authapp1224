const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
   
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }, // New isAdmin field
  },
  { timestamps: true }
);



const User = mongoose.model('User', UserSchema);
module.exports = User;


    //username: { type: String, required: true, unique: true },
 //firstname: { type: String, required: true },
    //lastname: { type: String, required: true },