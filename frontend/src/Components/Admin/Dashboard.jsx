import React from "react";
import Chart from "./Chart/Chart";
import FeaturedInfo from "./FeaturedInfo/FeaturedInfo";
import SideBar from "./Sidebar/Sidebar";
import { chartData } from "./data";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useSelector } from "react-redux";
const Dashboard = () => {
  // let navigate = useNavigate();
  // const {user,loading} = useSelector(state=>state.user);
  // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  // else if (!user) {
  //   navigate("/login");
  // }
  // else if (user.role !== "admin") {
  //   navigate("/home");
  // }
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100%" }}>
      <Navbar />
      {/* <div className="container"> */}
      <div className="main-container2">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div style={{ width: "80%", display: "flex", flexDirection: "column",height:"100vh",borderLeft:"2px solid white" }}>
          <FeaturedInfo />
          <Chart
            data={chartData}
            title="Sales Analytics"
            grid
            dataKey="Total Amount"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
