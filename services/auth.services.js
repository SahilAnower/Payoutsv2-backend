import { createUser, findUser } from "../data/auth.db.js";
import { CustomError } from "../models/CustomError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignupService = async (payload) => {
  try {
    const { name, email, password } = payload;
    if (!name || !email || !password) {
      throw new CustomError(
        "Name, email, and password are required fields.",
        400
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const savedUser = await createUser({
      name: name,
      email: email,
      encryptedPassword: hashedPassword,
    });
    return savedUser;
  } catch (error) {
    throw error;
  }
};

export const userSigninService = async (payload) => {
  try {
    const { email, password } = payload;
    if (!email || !password) {
      throw new CustomError("Email, and password are required fields.", 400);
    }
    const foundUser = await findUser({
      email: email,
    });
    if (!foundUser) {
      throw new CustomError("User not found.", 404);
    }
    const isMatch = await bcrypt.compare(password, foundUser.encryptedPassword);
    if (!isMatch) {
      throw new CustomError("Invalid password.", 401);
    }
    const token = jwt.sign(
      { userId: foundUser?._id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 3600,
      }
    );
    return token;
  } catch (error) {
    throw error;
  }
};
