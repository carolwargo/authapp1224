const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },  
  lastname: { type: String, required: true },
  streetaddress: { type: String, required: true },    
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  phone: { type: String, required: true },  
  username: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Compare input password with the hashed password in the database
userSchema.methods.comparePassword = async function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
