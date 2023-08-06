import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    email: {
        required:true,
        type: String,
        unique: true
    },
    passwordHash: {
        required:true,
        unique: true,
        type: String,
    },
    firstName: String,
    lastName: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
 export const usersCollection = mongoose.model('users', userSchema);
