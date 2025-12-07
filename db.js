require('dotenv').config();             // load .env variables
const { MongoClient } = require('mongodb');  // <- this imports MongoClient

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
}

connectDB();
