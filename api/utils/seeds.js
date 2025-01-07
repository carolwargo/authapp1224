const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust path based on your structure

const seedUsers = async () => {
    try {
      // Connect to MongoDB
      await mongoose.connect('mongodb+srv://carolwargodev:password12345@cluster0.kkawl.mongodb.net/recruitauth?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
  
      // Clear the existing collection
      await User.deleteMany({});
      console.log('Existing users cleared');
  
      // Seed data
      const users = [
        {
          username: 'admin',
          password: await bcrypt.hash('password', 10),
          isAdmin: true,
        },
        {
          firstname: 'Alice',
          lastname: 'Smith',
          username: 'alice123',
          password: await bcrypt.hash('password123', 10),
        },
        {
          firstname: 'Bob',
          lastname: 'Johnson',
          username: 'bob456',
          password: await bcrypt.hash('password456', 10),
        },
        {
          firstname: 'Carol',
          lastname: 'Williams',
          username: 'carol789',
          password: await bcrypt.hash('password789', 10),
        },
      ];
  
      // Insert seed data
      const result = await User.insertMany(users);
      console.log(`${result.length} users successfully seeded`);
    } catch (error) {
      console.error('Error seeding the database:', error);
    } finally {
      // Disconnect from MongoDB
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB');
    }
  };
  
  // Run the seeding function
  seedUsers();
  