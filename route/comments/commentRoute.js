const express = require("express");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const {
  createCommentCtrl,
  fetchAllComments,
  fetchCommentCtrl,
  updateCommentCtrl,
  deleteCommentCtrl,
} = require("../../controllers/comments/commentCtrl");

const commentRouter = express.Router();

commentRouter.post("/", authMiddleware, createCommentCtrl);
commentRouter.get("/", authMiddleware, fetchAllComments);
commentRouter.get("/:id", authMiddleware, fetchCommentCtrl);
commentRouter.put("/:id", authMiddleware, updateCommentCtrl);
commentRouter.delete("/:id", authMiddleware, deleteCommentCtrl);

module.exports = commentRouter;
