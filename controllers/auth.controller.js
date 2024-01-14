import {
  userSigninService,
  userSignupService,
} from "../services/auth.services.js";

export const userSignup = async (req, res, next) => {
  try {
    const result = await userSignupService(req.body);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const userSignin = async (req, res, next) => {
  try {
    const result = await userSigninService(req.body);
    return res.status(200).json({ jwtToken: result });
  } catch (error) {
    next(error);
  }
};
