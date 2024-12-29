require('dotenv').config(); // Ensure correct path and usage
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI; // Use the correct variable name from your .env file
    if (!dbURI) {
      throw new Error('MONGO_URI is not defined in the .env file');
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDB;
