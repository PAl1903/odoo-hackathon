import React from "react";
import CheckBox from "./CheckBox/CheckBox";
import "./FilterBox.css";
import RadioBtn from "./RadioBtn/RadioBtn";
const FilterBox = () => {
  // const fetchCars = async () => {
  //   const response = await fetch("http://localhost:5000/myapp/cars");
  //   const data = await response.json();

  //   console.log(data.cars[0].features.fuelType);
  // };

  return (
    <div className="FilterBox">
      {/* <button onClick={fetchCars}>Get Cars</button> */}

      <div className="Heading">FILTER</div>

      <CheckBox></CheckBox>

      <RadioBtn></RadioBtn>
    </div>
  );
};

export default FilterBox;
