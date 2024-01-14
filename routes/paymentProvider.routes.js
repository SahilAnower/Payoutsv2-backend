import express from "express";
import { createPaymentProvider } from "../controllers/paymentProvider.controller";

const router = express.Router();

router.post("/setup", createPaymentProvider);
