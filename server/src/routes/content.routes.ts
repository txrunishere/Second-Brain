import { Router } from "express";

const router = Router();
import { verifyToken } from "../middleware/auth.middleware.js";
import { handleCreateContent, handleGetContent, handleDeleteContent } from "../controllers/content.controller";

router.use(verifyToken);

router.route("/").post(handleCreateContent).get(handleGetContent);
router.route("/:id").delete(handleDeleteContent);

export default router;
