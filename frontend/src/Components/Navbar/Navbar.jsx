import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Actions/userActions";

const Navbar = () => {
  let navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      {isAuthenticated && user.role === 'admin' ? (


        <ul style={{ marginBottom: 0 }} className="my-nav-style">
          <li>
            <NavLink to="/">
              <img src={logo} alt="" srcset="" className="logo-img" />
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              AboutUs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/furnitures">
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <DropdownButton
              id="dropdown-basic-button"
              title={`Welcome ${user.name}`}
            >
              <NavLink to="/myprofile">
              <Dropdown.Item href="/myprofile"> My Profile </Dropdown.Item>
              </NavLink>
              <NavLink to="/mybookings">
              <Dropdown.Item href="/mybookings">My Bookings</Dropdown.Item>
              </NavLink>
              <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
              <NavLink to="/admin/dashboard">
              <Dropdown.Item href="/admin/dashboard">Dashboard</Dropdown.Item>
              </NavLink>
            </DropdownButton>
          </li>
        </ul>
      ) : isAuthenticated ? (
<ul style={{ marginBottom: 0 }} className="my-nav-style">
          <li>
            <NavLink to="/">
              <img src={logo} alt="" srcset="" className="logo-img" />
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/furnitures">
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <DropdownButton
              id="dropdown-basic-button"
              title={`Welcome ${user.name}`}
            >
              <NavLink to="/myprofile">
              <Dropdown.Item href="/myprofile"> My Profile </Dropdown.Item>
              </NavLink>
              <NavLink to="/mybookings">
              <Dropdown.Item href="/mybookings">My Bookings</Dropdown.Item>
              </NavLink>
              <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      ) : (
        <ul style={{ marginBottom: 0 }} className="my-nav-style">
          <li>
            <NavLink to="/">
              <img src={logo} alt="" srcset="" className="logo-img" />
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/furnitures">
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <i class="fa-solid fa-user fa-lg fa-cog"></i>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
