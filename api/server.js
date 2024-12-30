const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());
const User = require('./models/User');

// Connect to MongoDB using the connection string from .env file
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.post('/signup', (req, res) => {
    User.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

const PORT = process.env.PORT || 5001;  // Fallback to 5001 if PORT isn't defined
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
