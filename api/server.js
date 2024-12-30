const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();  // This should load the environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());
const User = require('./models/User');

mongoose.connect('mongodb://localhost:127.0.0.1.27017/authapp1224')
app.listen(5001, ()=>
{
    console.log('Server is running on port 5001');
});

app.post('/signup', (req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
    }); 

    app.listen(5001, () => {
        console.log('Server is running on port 5001');
    });


//const PORT = process.env.PORT || 5001;
 // Fallback to 5001 if PORT isn't defined

// Connect to MongoDB
//connectDB();

// Importing routes
//const authRoutes = require('./routes/authRoutes');
//const userRoutes = require('./routes/userRoutes');

// Setting up routes
//app.use('/auth', authRoutes);
//app.use('/users', userRoutes);

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//const dotenv = require('dotenv');
//const connectDB = require('./config/connection'); // Adjust the path as needed
