const express = require("express");
const router = express.Router();
const {
  getUsers,
  deleteUsers,
  createUser,
  deleteUser,
  getUser,
  updateUser,
  login,
  forgotPassword,
  resetPassword,
  logout,
  updatePassword,
} = require("../controllers/userController");
const reqReceivedLogger = require("../middlewares/reqReceivedLogger");
const {
  userValidator,
  adminValidator,
} = require("../middlewares/utils/validators");
const protectedRoute = require("../middlewares/auth");
//root

router
  .route("/")
  .get(reqReceivedLogger, getUsers)
  .post(reqReceivedLogger, userValidator, createUser)
  .delete(reqReceivedLogger, protectedRoute, deleteUsers);

router.route("/login").post(reqReceivedLogger, login);

router.route("/forgotpassword").post(reqReceivedLogger, forgotPassword);

router.route("/resetpassword").put(reqReceivedLogger, resetPassword);

router
  .route("/updatepassword")
  .put(reqReceivedLogger, protectedRoute, updatePassword);

router.route("/logout").get(reqReceivedLogger, protectedRoute, logout);

router
  .route("/:userId")
  .get(reqReceivedLogger, getUser)
  .put(reqReceivedLogger, protectedRoute, updateUser)
  .delete(reqReceivedLogger, protectedRoute, deleteUser);

module.exports = router;
