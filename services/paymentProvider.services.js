import { PaymentProviders } from "../utils/enum.util";
import { setupRazorpayPaymentProvider } from "./thirdParty.services";

export const setupPaymentProviderService = async (payload) => {
  try {
    const { paymentProviderType } = payload;
    let result;
    switch (paymentProviderType) {
      case PaymentProviders.RAZORPAY:
        result = await setupRazorpayPaymentProvider(payload);
        break;
    }
    return result;
  } catch (error) {
    throw error;
  }
};
