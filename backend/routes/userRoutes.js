const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updatePassword,
  updateUserProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const authorized = require("../middleware/authentication");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get(authorized.myAuth, getUserDetails);
router.route("/me/update/password").put(authorized.myAuth, updatePassword);
router.route("/me/update").put(authorized.myAuth, updateUserProfile);
router
  .route("/admin/users")
  .get(authorized.myAuth, authorized.authorizedRoles("admin"), getAllUsers);

router
  .route("/admin/user/:id")
  .get(authorized.myAuth, authorized.authorizedRoles("admin"), getSingleUser)
  .put(authorized.myAuth, authorized.authorizedRoles("admin"), updateUserRole)
  .delete(authorized.myAuth, authorized.authorizedRoles("admin"), deleteUser);
module.exports = router;
