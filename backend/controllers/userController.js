const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const validator = require("validator");
const passport = require("passport");
const session = require("express-session");
const { Result } = require("express-validator");

exports.registerUser = (req, res, next) => {
  // If Password and Confirm Password doesnt match
  const user = new User({
    name: req.body.name,
    username: req.body.username,
  });
  // if (req.body.password === req.body.cpassword) {
  // const user = await User.create(req.body);
  // res.status(201).json({
  //   success: true,
  //   user,
  // });
  if (!validator.isLength(req.body.password, { min: 8 })) {
    return next(
      new ErrorHandler("Password Should be of min 8 characters", 500)
    );
  } else if (!validator.equals(req.body.password, req.body.cpassword)) {
    return next(
      new ErrorHandler("Password and Confirm Password should match!", 500)
    );
  } else {
    User.register(user, req.body.password, function (err, user1) {
      if (err) {
        return next(new ErrorHandler(err, 500));
      } else {
        passport.authenticate("local")(req, res, function () {
          res.status(201).json({
            success: true,
            user:user1,
          });
        });
      }
    });
  }
  // } else {
  //   return next(
  //     new ErrorHandler("Password and Confirm Password Should Match!", 500)
  //   );
  // }
};

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  // const chkLogin = await User.findOne({
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  // if (!chkLogin) {
  //   return next(new ErrorHandler("Can't Login User Doesn't exist", 500));
  // } else {
  //   res.status(200).json({
  //     success: true,
  //     message: "Login Successful",
  //   });
  // }
  // const user = new User({
  //   username: req.body.username,
  //   password: req.body.password,
  // });

  // await req.login(user, function (err) {
  //   if (err) {
  //     return next(new ErrorHandler(err, 500));
  //   } else {
  //     passport.authenticate("local")(req, res, function () {
  //       res.status(200).json({
  //         success: true,
  //         message: "Login Successful",
  //         user:req.user
  //       });
  //     });
  //   }
  // });
  passport.authenticate("local")(req,res,function (err,user) {
    if (err) {
      return next(new ErrorHandler(err, 500));
    }
    else {
      res.status(200).json({
       success:true,
       message:"Login Successfull",
       user:req.user
       })
    }
  })
});

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  await req.logout(function (err) {
    if (err) {
      return next(new ErrorHandler(err, 500));
    }

    res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  });
});

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const fUser = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user:fUser,
  });
});

exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  await User.findByUsername(req.user.username, (err, user) => {
    if (err) {
      return next(new ErrorHandler(err, 500));
    } else {
      user.changePassword(req.body.oldpassword, req.body.newpassword, (err) => {
        if (err) {
          return next(new ErrorHandler(err, 500));
        } else {
          res.status(200).json({
            success: true,
            message: "Password Successfully Updated!",
          });
        }
      });
    }
  });
});

exports.updateUserProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    username: req.body.username,
    phone: req.body.phone,
    gender: req.body.gender,
    dob: req.body.dob,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile Successfully Updated!",
    user,
  });
});

//Admin
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    allUsers:users,
    totalUsers:users.length
  });
});

//Admin
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User dosen't exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

//Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Role Successfully Updated!",
    user,
  });
});

//Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User not found with ID: ${req.params.id}`, 500)
    );
  }

 await user.remove();
  res.status(200).json({
    success: true,
    message: "User Successfully Deleted",
  });
});
