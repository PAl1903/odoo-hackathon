import React, { useState, useEffect } from "react";
import "./Bookings.css";

import { DataGrid } from "@mui/x-data-grid";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getParticularBooking } from "../../Actions/bookingActions";

export default function Bookings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mybookings } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getParticularBooking());
  }, [dispatch]);

  const rows = [];
  mybookings &&
    mybookings.forEach((booking) => {
      let amt = `₹${booking.totalAmount}`;
      rows.push({
        id: booking._id,
        transactionid: booking.transactionId,
        amount: amt,
        from: booking.bookedSlot.from,
        to: booking.bookedSlot.to,
        hours: booking.totalHours,
      });
    });

  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 180, flex: 0.2 },

    {
      field: "from",
      headerName: "Booked Slot: From",
      minWidth: 160,
      flex: 0.2,
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    {
      field: "to",
      headerName: "Booked Slot: To",
      minWidth: 160,
      flex: 0.2,
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    { field: "amount", headerName: "Amount", minWidth: 90, flex: 0.1 },
    {
      field: "transactionid",
      headerName: "Transaction ID",
      flex: 0.2,
      minWidth: 120,
    },
  ];
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
      <Navbar />
      <div className="main-container2">
        <div className="productList">
          <DataGrid
            style={{ color: "#EEEEEE", fontSize: "0.85vmax" }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            autoHeight
            // pageSize={8}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
