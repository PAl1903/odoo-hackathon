const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  furnitureBooked: {
    type: mongoose.Schema.ObjectId,
    ref: "Furniture",
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  bookedSlot: {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  totalHours: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("booking", bookingSchema);


