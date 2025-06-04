import { Router } from "express";
const router = Router();
import {
  handleLoginUser,
  handleRegisterUser,
  handleGetCurrentUser
} from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

// Route to register a new user
router.route("/register").post(handleRegisterUser);

// Route to login an existing user
router.route("/login").post(handleLoginUser);

router.route('/').get(verifyToken, handleGetCurrentUser)

export default router;
