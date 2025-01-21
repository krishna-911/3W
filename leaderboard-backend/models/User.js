import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  totalPoints: { 
    type: Number, 
    default: 0 
  },
  history: [
    {
      points: Number,
      claimedAt: { type: Date, default: Date.now },
    },
  ],
});

export const User=  mongoose.model("User", userSchema);
