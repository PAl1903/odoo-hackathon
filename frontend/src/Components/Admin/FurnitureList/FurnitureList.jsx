import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FurnitureList.css";
import "../Dashboard.css";
import "../Sidebar/Sidebar.css";
import { DataGrid } from "@mui/x-data-grid";


import { BrowserRouter as Router, Link, Route, Switch, useNavigate } from "react-router-dom";

import { MdDeleteOutline } from "react-icons/md";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteFurniture, getAllFurnituresAdmin } from "../../../Actions/adminActions";

import New from "../Furniture/New";

export default function FurnitureList() {
  // const [data, setData] = useState(productRows);
  // const [furnitures, setFurnitures] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { furnitures } = useSelector((state) => state.admin);
  const getFurnitures = async () => {
    // const furnitures1 = [];
    // await axios.get("/myapp/furnitures").then((furniture) => {
    //   Object.values(furniture.data)[1].map((e) => {
    //     furnitures1.push({
    //       id: e._id,
    //       title: e.title,
    //       noPlate: e.noPlate,
    //       stock: e.stock,
    //       rent: e.rent,
    //       key:e._id
    //     });
    //   });
    //   setFurnitures(furnitures1);
    // });
  };
  useEffect(() => {
    dispatch(getAllFurnituresAdmin());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteFurniture(id));
    navigate("/admin/dashboard");
  };
  const rows = [];
  furnitures &&
    furnitures.forEach((furniture) => {
      let furnitureRent = `₹${furniture.rent}/hr`;
      rows.push({
        id: furniture._id,
        title: furniture.title,
        rent: furnitureRent,
      });
    });
  const columns = [
    { field: "id", headerName: "Furniture ID", minWidth: 200, flex: 0.3 },
    {
      field: "title",
      headerName: "Furniture Name",
      minWidth: 130,
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
      field: "rent",
      headerName: "Rent",
      flex: 0.1,
      minWidth: 140,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/furniture/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

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
        <div className="furnitureList">
          <div className="createProduct">

          {/* /admin/furniture/new" */}
            <Link to="/admin/dashboard/furniture/new">
              <button className="productAddButton">Create</button>
            </Link>
          </div>
          <DataGrid
            style={{ color: "#EEEEEE",fontSize:"0.85vmax" }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            autoHeight
            // autoHeight
            // pageSize={8}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
