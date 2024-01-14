import express from "express";
import { userSignup, userSignin } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", userSignup);

router.post("/login", userSignin);

export default router;
