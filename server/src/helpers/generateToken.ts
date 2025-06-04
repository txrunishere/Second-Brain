import { Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../conf/config";
import { Types } from "mongoose";

const generateToken = (userId: Types.ObjectId, res: Response) => {
  try {
    const token = jwt.sign({ id: userId }, config.jwtSecret, {
      expiresIn: "3d",
    });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { generateToken };
