const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cloud_wallet", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB: cloud_wallet");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Stop the app if DB connection fails
  }
};


const UserSchema=mongoose.Schema({
    username:String,
    password:String,
    publickey:String,
    privatekey:String
})


const userModel=mongoose.model("users",UserSchema)

module.exports = {
    userModel
}
