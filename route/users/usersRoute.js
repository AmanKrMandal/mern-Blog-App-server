const express = require("express");
const authMiddleware = require("../../middlewares/auth/authMiddleware");
const {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  deleteUsersCtrl,
  fetchUserDetailsCtrl,
  userProfileCtrl,
  updateUserCtrl,
  updateUserPasswordCtrl,
  followingUsersCtrl,
  unfollowUsersCtrl,
  blockUserCtrl,
  unBlockUserCtrl,
  generateVerificationTokenCtrl,
  accountVerificationCtrl,
  forgetPasswordToken,
  passwordResetCtrl,
  profilePhotoUploadCtrl,
} = require("../../controllers/users/usersCtrl");
const {
  photoUpload,
  profilePhotoResize,
} = require("../../middlewares/uploads/photoUpload");

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.put(
  "/profilephoto-upload",
  authMiddleware,
  photoUpload.single("image"),
  profilePhotoResize,
  profilePhotoUploadCtrl
);
userRoutes.get("/", authMiddleware, fetchUsersCtrl);
userRoutes.post("/forget-password-token", forgetPasswordToken);
userRoutes.put("/reset-password", passwordResetCtrl); // password reset
userRoutes.put("/password", authMiddleware, updateUserPasswordCtrl);
userRoutes.put("/follow", authMiddleware, followingUsersCtrl);

userRoutes.post(
  "/generate-verify-email-token",
  authMiddleware,
  generateVerificationTokenCtrl
);
userRoutes.put("/verify-account", authMiddleware, accountVerificationCtrl);
userRoutes.put("/unfollow", authMiddleware, unfollowUsersCtrl);
userRoutes.put("/block-user/:id", authMiddleware, blockUserCtrl);
userRoutes.put("/unblock-user/:id", authMiddleware, unBlockUserCtrl);
userRoutes.get("/profile/:id", authMiddleware, userProfileCtrl);
userRoutes.put("/", authMiddleware, updateUserCtrl);
userRoutes.delete("/:id", deleteUsersCtrl);
userRoutes.get("/:id", fetchUserDetailsCtrl);

module.exports = userRoutes;
