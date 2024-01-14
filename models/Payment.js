import mongoose from "mongoose";
import { PaymentProviders } from "../utils/enum.util.js";

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  paymentProvider: {
    type: String,
    enum: Object.values(PaymentProviders),
    default: PaymentProviders.COD,
  },
  orderId: {
    type: String,
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
  orderAmount: {
    type: Number,
    required: true,
  },
  transactionFees: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Payment", paymentSchemaSchema);
