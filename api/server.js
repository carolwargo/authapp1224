//api/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/connection'); // Import the connection function

const app = express();

// Connect to DB
connectDB();

// Middleware setup
app.use(cors({ credentials: true, origin: 'http://localhost:5000' }));
app.use(express.json());
app.use(cookieParser());

// Use routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/usersRoutes');

app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);

// Catch-all error handling for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware for more detailed error messages
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen( () => {    
    console.log('Server is running on port 5001');
    }
    );

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    