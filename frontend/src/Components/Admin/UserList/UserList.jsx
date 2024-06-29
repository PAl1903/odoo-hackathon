import React, { useState, useEffect } from "react";
import "./UserList.css";

import { DataGrid } from "@mui/x-data-grid";

import { BrowserRouter as Router, Link, Route, Switch, useNavigate } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import "../Dashboard.css";
import "../Sidebar/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../Actions/adminActions";
export default function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.admin);
  // console.log(users);
  const handleDelete = (id) => {
   dispatch(deleteUser(id));
   navigate("/admin/dashboard");
  };

  // const array = []

  // const newData = array.concat(search(data))
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const rows = [];
  users &&
    users.forEach((user) => {
      rows.push({
        id: user._id,
        name: user.name,
        username: user.username,
        role: user.role,
      });
    });
  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.2 },
    // {
    //   field: "avtar",
    //   headerName: "Profile",
    //   width: 130,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avtar} alt="" />
    //       </div>
    //     );
    //   },
    // },

    {
      field: "name",
      headerName: "Name",
      minWidth: 90,
      flex: 0.1,
      // renderCell: (params) => {
      //   return (
      //     <div className='userListUser'>
      //       <img className='userListImg' src={params.row.avtar} alt='' />
      //       {params.row.username}{' '}
      //     </div>
      //   )
      // },
    },
    { field: "username", headerName: "Email-ID", minWidth: 150, flex: 0.2 },
    {
      field: "role",
      headerName: "Role",
      flex: 0.1,
      minWidth: 90,
    },

    {
      field: "action",
      headerName: "Action",
      flex: 0.2,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <MdDeleteOutline
              className="userListDelete"
              size="1.5rem"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const [query, setQuery] = useState("");

  const keys = ["User", "Email-ID"];

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key](query)));
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
      <Navbar />
      <div className="main-container2">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="userList">
          {/* <div className='search'>
        <div className='searchRight'>
          <input
            type='text'
            placeholder='Search...'
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <div className='searchLeft'>
          <Search className='searchIcon' />
        </div>
      </div> */}
          {/* console.log(Search(data)) */}
          <DataGrid
            style={{ color: "#EEEEEE",fontSize:"0.85vmax" }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
           
            // pageSize={8}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
            autoHeight
          />
        </div>
      </div>
    </div>
  );
}
