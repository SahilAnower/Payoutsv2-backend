import mongoose from "mongoose";

const razorpaySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  keyId: {
    type: String,
    required: true,
  },
  secretKey: {
    type: String,
    required: true,
  },
});

export const razorpayModel = mongoose.model("razorpay", razorpaySchema);
