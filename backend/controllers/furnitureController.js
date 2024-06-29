const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Furniture = require("../models/furnitureModel");
const ErrorHandler = require("../utils/errorHandler");
const session = require("express-session");
const passport = require("passport");
const Booking = require("../models/bookingModel");

// Create Furniture -- Admin
exports.createFurniture = catchAsyncErrors(async (req, res, next) => {
  // Same title validation
  const titleChk = await Furniture.findOne({ title: req.body.title });
  if (!titleChk) {
    req.body.user = req.user.id;
    const furniture = await Furniture.create(req.body);
    res.status(201).json({
      success: true,
      furniture,
    });
  } else {
    return next(new ErrorHandler("Title already exists!", 500));
  }
});

// Read Furnitures i.e Get All furnitures

exports.getFurnitures = catchAsyncErrors(async (req, res, next) => {
  // category = Tables
  const { category, featured, title } = req.query;
  const queryObject = {};
  if (category) {
    queryObject.category = category;
  }
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  const furnitures = await Furniture.find(queryObject);
  if (!furnitures) {
    return next(new ErrorHandler("Furnitures not found!", 500));
  } else {
    res.status(200).json({
      success: true,
      furnitures,
      totalFurnitures:furnitures.length
    });
  }
});

//Ascending Order
exports.sortRentASC = catchAsyncErrors(async (req, res, next) => {
  const furnitures = await Furniture.find().sort({ rent: 1 });
  if (!furnitures) {
    return next(new ErrorHandler("Furnitures not found!", 500));
  }

  res.status(200).json({
    sucess: true,
    furnitures,
  });
});

exports.sortRentDESC = catchAsyncErrors(async (req, res, next) => {
  const furnitures = await Furniture.find().sort({ rent: -1 });
  if (!furnitures) {
    return next(new ErrorHandler("Furnitures not found!", 500));
  }

  res.status(200).json({
    sucess: true,
    furnitures,
  });
});

// Get Particular Furniture

exports.getRequiredFurniture = catchAsyncErrors(async (req, res, next) => {
  const furniture = await Furniture.findById(req.params.id);
  if (!furniture) {
    return next(new ErrorHandler("Furniture not found", 500));
  } else {
    res.status(200).json({
      success: true,
      furniture,
    });
  }
});

// Update Furniture -- Admin

exports.updateFurniture = catchAsyncErrors(async (req, res, next) => {
  let furniture = await Furniture.findById(req.params.id);
  if (!furniture) {
    return next(new ErrorHandler("Furniture not found!", 404));
  }

  furniture = await Furniture.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    furniture,
  });
});

// Delete Furniture -- Admin

exports.deleteFurniture = catchAsyncErrors(async (req, res, next) => {
  const furniture = await Furniture.findById(req.params.id);
  if (!furniture) {
    return next(new ErrorHandler("Furniture not found!", 404));
  }
  // const booking = await Booking.find({furnitureBooked:req.params.id});
  await Booking.remove({furnitureBooked:req.params.id});
  await furniture.remove();
  res.status(200).json({
    success: true,
    message: "Furniture Deleted Successfully!",
  });
});

