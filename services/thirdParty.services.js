import { createRazorpay } from "../data/razorpay.db";

export const setupRazorpayPaymentProvider = async (payload) => {
  try {
    const res = await createRazorpay({
      user: payload?.userId,
      keyId: payload?.keyId,
      secretKey: payload?.secretKey,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
