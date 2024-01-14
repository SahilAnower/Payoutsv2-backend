import { setupPaymentProviderService } from "../services/paymentProvider.services";

export const createPaymentProvider = async (req, res, next) => {
  try {
    req.body.userId = req.userId;
    const result = await setupPaymentProviderService(req.body);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
