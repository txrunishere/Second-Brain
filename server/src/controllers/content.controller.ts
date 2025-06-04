import asyncHandler from "express-async-handler";
import { Content } from "../models";
import { Request, Response } from "express";

const handleCreateContent = asyncHandler(
  async (req: Request, res: Response) => {
    const { title, type, link } = req.body;

    if (!title || !type) {
      res.status(400).json({
        error: "Title and type are required",
      });
    }

    const content = await Content.create({
      title,
      type,
      link,
      userId: req.user._id, // Assuming req.user is set by the verifyToken middleware
      tags: req.body.tags || [],
    });

    if (content) {
      res.status(201).json({
        message: "Content created successfully",
        content,
      });
    } else {
      res.status(500).json({
        error: "Failed to create content",
      });
    }
  }
);

const handleGetContent = asyncHandler(async (req: Request, res: Response) => {
  const content = await Content.find({ userId: req.user._id }).populate(
    "userId",
    "username"
  );

  if (content) {
    res.status(200).json({
      message: "Content retrieved successfully",
      content,
    });
  } else {
    res.status(404).json({
      error: "No content found",
    });
  }
});

const handleDeleteContent = asyncHandler(
  async (req: Request, res: Response) => {
    const contentId = req.params.id;
    const content = await Content.findByIdAndDelete(contentId);
    if (content) {
      res.status(200).json({
        message: `Content with id ${content._id} deleted successfully`,
      });
    } else {
      res.status(404).json({
        error: "Content not found",
      });
    }
  }
);

export { handleCreateContent, handleGetContent, handleDeleteContent };
