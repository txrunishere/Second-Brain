import asyncHandler from "express-async-handler";
import { User } from "../models";
import { Request, Response } from "express";
import { generateToken } from "../helpers/generateToken";
import bcrypt from "bcrypt";

const handleRegisterUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      error: "Please fill all fields",
    })
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400).json({
      error: "User already exists",
    })
  }

  const user = await User.create({
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
    });
  } else {
    res.status(400).json({
      error: "Failed to create user",
    })
  }
});

const handleLoginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      error: "Please fill all fields",
    })
  }

  const user = await User.findOne({ username });
  const isPasswordMatched = await bcrypt.compare(password, user?.password || "");
  if (user && isPasswordMatched) {
    const token: string | undefined = generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      token
    });
  } else {
    res.status(401).json({
      error: "Invalid username or password",
    });
  }
});

const handleGetCurrentUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({
    user: req.user
  })
})

export { handleRegisterUser, handleLoginUser, handleGetCurrentUser };
