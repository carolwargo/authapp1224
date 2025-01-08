const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust path based on your structure

// Load environment variables
require('dotenv').config();

// Get MONGO_URI from the environment variables
const MONGO_URI = process.env.MONGO_URI;

// Check if MONGO_URI exists in .env file
if (!MONGO_URI) {
  console.error('MONGO_URI environment variable is not set');
  process.exit(1); // Exit if MONGO_URI is not provided
}

const seedUsers = [
  {
    username: 'Carol Wargo',
    email: 'carolwargo@gmail.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: true,
  },
  {
    username: 'Admin User',
    email: 'admin',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    username: 'Alice Smith',
    email: 'alice.smith@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    username: 'Bob Jones',
   email: 'bobjones@example.com',
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    username: 'John Apple',
    email: "john@example.com",
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
  {
    username: 'Jane Spot',
    email: "jane@example.com",
    password: bcrypt.hashSync('password123', 10),
    isAdmin: false,
  },
];


const seedDB = async () => {
  try {
    // Connect to MongoDB using MONGO_URI from environment variables
    await mongoose.connect(MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Connected to MongoDB');

    // Clear existing users from the database
    await User.deleteMany();

    // Insert new seed users
    await User.insertMany(seedUsers);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

seedDB();
