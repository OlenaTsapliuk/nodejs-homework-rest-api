const express = require("express");

const {
  register,
  login,
  logout,
  currentUser,
  updateAvatar,
  verify,
  resendingVerify,
} = require("../../controllers/auth");

const { joiUserSchema } = require("../../model/user");
const {
  controllerWrapper,
  validation,
  authenticate,
  sizeJimp,
  upload,
} = require("../../middlewares");

const router = express.Router();

router.post("/signup", validation(joiUserSchema), controllerWrapper(register));

router.post("/login", validation(joiUserSchema), controllerWrapper(login));

router.post("/logout", authenticate, controllerWrapper(logout));
router.get("/current", authenticate, controllerWrapper(currentUser));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  sizeJimp,
  controllerWrapper(updateAvatar)
);
router.get("/verify/:verificationToken", controllerWrapper(verify));
router.post("/verify/", controllerWrapper(resendingVerify));

module.exports = router;
