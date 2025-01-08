require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const users = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    username: "john",
    password: "password123",
  },
  {
    firstname: "Jane",
    lastname: "Doe",
    email: "jane@example.com",
    username: "jane",
    password: "password123",
  },
  {
    username: "admin",
    password: await bcrypt.hash("password", 10),
    isAdmin: true,
  },
  {
    firstname: "Alice",
    lastname: "Smith",
    username: "alice123",
    password: await bcrypt.hash("password123", 10),
  },
  {
    firstname: "Bob",
    lastname: "Johnson",
    username: "bob456",
    password: await bcrypt.hash("password456", 10),
  },
  {
    firstname: "Carol",
    lastname: "Williams",
    username: "carol789",
    password: await bcrypt.hash("password789", 10),
  },
];

async function seed() {
  try {
    // Load the MongoDB URI from environment variables
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Clear existing collections
    await User.deleteMany({});

    // Hash passwords before inserting users
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, saltRounds),
      }))
    );

    // Insert users
    await User.insertMany(hashedUsers);

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
