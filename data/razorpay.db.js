import { razorpayModel } from "../models/PaymentProvider.js";

export const createRazorpay = async (payload) => {
  try {
    const res = await razorpayModel.create(payload);
    if (res) {
      return res;
    }
  } catch (error) {
    throw error;
  }
};
