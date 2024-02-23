const mongoose = require('mongoose');
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Mongodb connected with server successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

module.exports = connectToDatabase;
