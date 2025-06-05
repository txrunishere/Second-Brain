import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { config } from "../conf/config.js";

interface MyJwtPayload extends JwtPayload {
  id: string;
}

export const verifyToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log({ token });
    if (!token) {
      res.status(400).json({
        error: "Token not found!!",
      });
    }

    if (token && req.headers.authorization?.startsWith("Bearer ")) {
      console.log(1)
      return jwt.verify(token, config.jwtSecret, async (err, decoded) => {
        if ( err ) {
          console.log(decoded)
          return res.status(400).json({
            success: false,
            message: err.message || "Token Error"
          })
        }
        console.log({decoded})
        // @ts-ignore
        const user = await User.findById(decoded.id).select("-password")
        console.log({user})
        req.user = user
        next()
      });
    } else {
      res.status(403).json({
        error:
          "You are not authorized to access this resource. Please login first.",
      });
    }
  }
);
