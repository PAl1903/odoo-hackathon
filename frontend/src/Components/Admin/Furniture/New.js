import React from "react";
import "./New.css";
import "../Sidebar/Sidebar.css";
import "../Dashboard.css";

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import create_furniture from "../../../images/create_furniture.jpeg";
import { useDispatch } from "react-redux";
import { createFurniture } from "../../../Actions/adminActions";

const New = () => {
  const dispatch = useDispatch();
  const [furnitureDetails, setfurnitureDetails] = React.useState({
    title: "",
    description: "",
    rent: "",
    url:"",
    category: "",
    colour: ""
  });

  // Change State Function
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setfurnitureDetails((prefurnitureDetails) => {
      return {
        ...prefurnitureDetails,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
 dispatch(createFurniture(furnitureDetails.title,furnitureDetails.description,furnitureDetails.rent,furnitureDetails.url,furnitureDetails.category,furnitureDetails.colour))
console.log(furnitureDetails.url);
  };
  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#222831" }}>
        <Navbar />
      </div>

      <div className="furniture-content-div">
        <div className="sidebar-container">
          <SideBar />
        </div>

      
        <div className="img-container">
          <div className="heading">
            <h2>Create A New Furniture</h2>
          </div>
          <img className="create-img" src={create_furniture} alt="Furniture-img" />
        </div>

        <div className="create-info-div">
          <form
            className="create-furniture-form"
            onSubmit={handleSubmit}
            method="post"
          >
            <div className="new-furniture-data">
              <input
                type="text"
                name="title"
                // value={"title"}
                value={furnitureDetails.title}
                onChange={changeHandler}
                className="furniture-input"
                placeholder="Title"
                required
              />
            </div>

            <div className="new-furniture-data">
              <input
                type="text"
                name="rent"
                // value={"rent"}
                value={furnitureDetails.rent}
                onChange={changeHandler}
                className="furniture-input"
                placeholder="Rent"
                required
              />
            </div>
            <div className="new-furniture-data">
              <input
                type="text"
                name="url"
                // value={"rent"}
                value={furnitureDetails.url}
                onChange={changeHandler}
                className="furniture-input"
                placeholder="Image URL"
                required
              />
            </div>
            {/* <div className="new-furniture-data">
              Featured:
             True <input
                type="radio"
                name="feature"
                // value={"rent"}
                value="true"
                className=""
                placeholder="Featured"
                required
              />
              False <input
                type="radio"
                name="feature"
                // value={"rent"}
                value="true"
                className=""
                placeholder="Featured"
                required
              />
            </div> */}

            <div className="new-furniture-data">
              <textarea
                placeholder="Description"
                name="description"
                value={furnitureDetails.description}
                onChange={changeHandler}
                className="furniture-input furniture-input-area"
              ></textarea>
            </div>

            <div className="joint-div">
              <div className="new-furniture-feat-data">
                <select
                  name="category"
                  value={furnitureDetails.category}
                  onChange={changeHandler}
                  className="furniture-company-option"
                >
                  <option className="furniture-company" value="category">
                    Category
                  </option>
                  <option className="furniture-company" value="Sofa">
                    Sofa
                  </option>
                  <option className="furniture-company" value="Tables">
                    Tables
                  </option>
                  <option className="furniture-company" value="Desks">
                    Desks
                  </option>
                  <option className="furniture-company" value="Chairs">
                    Chairs
                  </option>
                  <option className="furniture-company" value="Cabinets">
                    Cabinets
                  </option>
                </select>
              </div>

              <div className="new-furniture-feat-data">
                <input
                  type="text"
                  name="colour"
                  value={furnitureDetails.colour}
                  onChange={changeHandler}
                  className="joint-div-furniture-input"
                  placeholder="Colour"
                  required
                />
              </div>
            </div>

            <div>
              <button type="submit" className="create-btn">
                Create A Furniture
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
