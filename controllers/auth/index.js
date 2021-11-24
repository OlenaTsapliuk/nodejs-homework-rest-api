const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendingVerify = require("./resendingVerify");

module.exports = {
  register,
  login,
  logout,
  currentUser,
  updateAvatar,
  verify,
  resendingVerify,
};
