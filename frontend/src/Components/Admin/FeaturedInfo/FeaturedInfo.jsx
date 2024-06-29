import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBookings,
  getAllFurnituresAdmin,
  getAllUsers,
} from "../../../Actions/adminActions";
import "./FeaturedInfo.css";

export default function FeaturedInfo() {
  const dispatch = useDispatch();
  const { users, bookings, furnitures } = useSelector((state) => state.admin);
  const totalUsers = users && users.length;
  const totalBookings = bookings && bookings.length;
  const totalFurnitures = furnitures && furnitures.length;
  let revenue = 0;
  bookings &&
    bookings.forEach((booking) => {
      revenue = revenue + booking.totalAmount;
    });
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllBookings());
    dispatch(getAllFurnituresAdmin());
  }, [dispatch]);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₹{revenue}</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Bookings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalBookings}</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalUsers}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Furnitures</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalFurnitures}</span>
        </div>
      </div>
    </div>
  );
}
