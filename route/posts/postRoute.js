const express = require("express");
const {
  createPostCtrl,
  fetchPostCrtl,
  fetchSinglePostCrtl,
  updatePostCrtl,
  deletePostCrtl,
  toggleAddLikeToPostCtrl,
  toggleAddDislikeToPostCtrl,
} = require("../../controllers/posts/postCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");
const {
  postImgResize,
  photoUpload,
} = require("../../middlewares/uploads/photoUpload");
const postRoutes = express.Router();

postRoutes.post(
  "/",
  authMiddleware,
  photoUpload.single("image"),
  postImgResize,
  createPostCtrl
);

postRoutes.put("/likes", authMiddleware, toggleAddLikeToPostCtrl);
postRoutes.put("/dislikes", authMiddleware, toggleAddDislikeToPostCtrl);

postRoutes.get("/", fetchPostCrtl);
postRoutes.get("/:id", fetchSinglePostCrtl);
postRoutes.put("/:id", authMiddleware, updatePostCrtl);
postRoutes.delete("/:id", authMiddleware, deletePostCrtl);

module.exports = postRoutes;
