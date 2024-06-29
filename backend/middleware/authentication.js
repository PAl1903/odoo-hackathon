const session = require("express-session");
const passport = require("passport");
const ErrorHandler = require("../utils/errorHandler");

exports.myAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return next(new ErrorHandler("Please Login!", 500));
  }
};

exports.authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};
