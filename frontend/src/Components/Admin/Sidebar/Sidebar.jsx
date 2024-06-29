import React, { useState } from "react";
import "./Sidebar.css";
import {
  MdLineStyle,
  MdGroups,
  MdCarRental,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default function SideBar() {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
      <h3 className="sidebarTitle">DashBoard</h3>
      <div className="sidebarList">
        <Link to="/admin/dashboard" className="link">
          <span className={"sidebarListItem"}>
            <MdLineStyle className="sidebarIcon" />
            Dashboard
          </span>
        </Link>

        <Link to="/admin/dashboard/users" className="link">
          <span className={"sidebarListItem"}>
            <MdGroups className="sidebarIcon" />
            Users
          </span>
        </Link>

        <Link to="/admin/dashboard/furnitures" className="link">
          <span className={"sidebarListItem"}>
            <MdCarRental className="sidebarIcon" />
            Furniture
          </span>
        </Link>

        <Link to="/admin/dashboard/bookings" className="link">
          <span className={"sidebarListItem"}>
            <MdOutlineAttachMoney className="sidebarIcon" />
            Bookings
          </span>
        </Link>
      </div>
    </>
  );
}
