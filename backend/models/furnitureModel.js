const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Furniture Title cannot be empty!"],
  },
  description: {
    type: String,
    required: [true, "Furniture Description cannot be empty!"],
  },
  rent: {
    type: Number,
    maxLength: [5, "Rent cannot exceed 5 characters"],
    required: [true, "Furniture Rent cannot be empty!"],
  },
  bookedSlot: 
    [{
      from: {
        type: String,
      },
      to: {
        type: String,
      },
      bookingId:{
        type:mongoose.Schema.ObjectId,
        ref:"Booking",
        required:true
      }
    }
    ],
  url: {
      type: String,
      required: true,
  },
  category: {
    type: String,
    required: [true, "Furniture Category cannot be empty!"],
    enum: ["Sofa", "Tables", "Desks", "Chairs", "Cabinets"],
  },
  features: {
    colour: {
      type: String,
      required: [true, "Colour can't be empty!"],
    }
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Furniture", furnitureSchema);
