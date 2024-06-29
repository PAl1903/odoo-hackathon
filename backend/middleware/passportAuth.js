const User = require("../models/userModel");
const passport = require("passport");

const pass = () => {
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};
module.exports = pass;