const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const mongoose = require('mongoose'); // Load environment variables
const bcrypt = require('bcryptjs'); // Make sure to use bcryptjs
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());
const User = require('./models/User');

// Connect to MongoDB using the connection string from .env file
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Signup
app.post('/signup', (req, res) => {
    User.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});


//Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login request:', req.body); // Debugging request body

    User.findOne({ $or: [{ username }, { email: username }] })
        .then(user => {
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            user.comparePassword(password)
                .then(isMatch => {
                    if (!isMatch) {
                        return res.status(400).json({ message: 'Invalid credentials' });
                    }

                    const token = jwt.sign(
                        { userId: user._id, username: user.username },
                        process.env.JWT_SECRET,
                        { expiresIn: '1h' }
                    );

                    res.json({ message: 'Login successful', token });
                })
                .catch(err => {
                    return res.status(500).json({ message: 'Error comparing password', error: err });
                });
        })
        .catch(err => res.status(500).json({ message: 'Server error', error: err }));
});


const PORT = process.env.PORT || 5001;  // Fallback to 5001 if PORT isn't defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
