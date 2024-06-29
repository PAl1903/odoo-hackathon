import React, { useState, useEffect } from "react";
import "./BookingList.css";

import { DataGrid } from "@mui/x-data-grid";
import "../Dashboard.css";
import "../Sidebar/Sidebar.css";
import { BrowserRouter as Router, Link, Route, Switch, useNavigate } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, getAllBookings } from "../../../Actions/adminActions";

export default function BookingList() {
const navigate = useNavigate();
const dispatch = useDispatch();
const {bookings} = useSelector(state=>state.admin);

  useEffect(() => {
  dispatch(getAllBookings());
  }, [dispatch]);

const rows = [];
bookings && bookings.forEach(booking => {
  let amt = `₹${booking.totalAmount}`
  rows.push({
    id:booking._id,
transactionid:booking.transactionId,
amount:amt,
from:booking.bookedSlot.from,
to:booking.bookedSlot.to,
hours:booking.totalHours
  })
});
const handleDelete = (id) => {
dispatch(deleteBooking(id));
navigate("/admin/dashboard");
}
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
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <MdDeleteOutline
              className="productListDelete"
              size="1.5rem"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
      <Navbar />
      <div className="main-container2">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="productList">
          <DataGrid
            style={{ color: "#EEEEEE",fontSize:"0.85vmax" }}
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
