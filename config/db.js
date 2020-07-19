const mongoose = require("mongoose");
const config = require("config");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
