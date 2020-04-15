const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// this returns a promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    // exits process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
