const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/connection'); // Adjust the path as needed

dotenv.config();  // This should load the environment variables from .env file

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
 // Fallback to 5001 if PORT isn't defined

// Connect to MongoDB
connectDB();

// Importing routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Setting up routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
