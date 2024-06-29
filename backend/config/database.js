const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch(() => {
    console.log("Database connection was unsuccessful");
  });
}
module.exports = connectDB;