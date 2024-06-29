import React, { useState, useEffect } from "react";
// import { FormControlLabel,Radio, RadioGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { ClimbingBoxLoader } from "react-spinners";
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "../FilterBox/CheckBox/CheckBox.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Navbar from "../Navbar/Navbar";
import FilterBox from "../FilterBox/FilterBox";
import "../FilterBox/FilterBox.css";
import "../FilterBox/RadioBtn/RadioBtn.css";
import "./Furnitures.css";
import { useDispatch, useSelector } from "react-redux";
import { getallFurnitures, getASCfurnitures, getDESCfurnitures } from "../../Actions/furnitureActions";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";


const Furnitures = () => {
  const dispatch = useDispatch();
  const { furnitures } = useSelector((state) => state.furnitures);
  const [sort, setsort] = useState("");
  const categories = ["Sofa", "Tables", "Desks", "Chairs", "Cabinets"];
  useEffect(() => {
    dispatch(getallFurnitures());
  }, [dispatch]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  const [checkedItem, setCheckedItem] = useState([]);
  const handleChange = (event) => {
    const index = checkedItem.indexOf(event.target.value);
    console.log(checkedItem);
    if (index === -1) {
      setCheckedItem([...checkedItem, event.target.value]);
    } else {
      setCheckedItem(checkedItem.filter((comp) => comp !== event.target.value));
    }
    console.log(event.target.value);
  };
  const handleSort = (e) => {
    setsort(e.currentTarget.value);
    // console.log(sort);
    if (e.currentTarget.value === "ascending") {
      dispatch(getASCfurnitures());
    } else if (e.currentTarget.value === "descending") {
      dispatch(getDESCfurnitures());
    }
  };
  
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#3591ca",
        darker: "#053e85",
      },
      neutral: {
        main: "#ffffff",
        contrastText: "#fff",
      },
    },
  });
  return (
    <>
    
     
      {loading ? (
        <div style={{ height: "100vh", backgroundColor: "black" }}>
        {" "}
        <ClimbingBoxLoader
          color="#36d7b7"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
      ) : (
        <div className="main-container-1">
          {/* <div>
            <Navbar />
          </div> */}
          <div style={{ backgroundColor: "#222831"}}>
        <Navbar />
      </div>
          <div className="furniture-container">
            {/* <FilterBox /> */}
            <div className="FilterBox">
              <div className="Heading">FILTER</div>
              <ThemeProvider theme={theme}>
                <div className="checkbox-container">
                  <FormControl>
                    <FormLabel className="sub-heading" color="neutral">
                      Companies
                    </FormLabel>
                    <div className="divider"></div>
                    <FormGroup>
                      {categories &&
                        categories.map((categorie) => {
                          return (
                            <FormControlLabel
                              label={categorie}
                              value={categorie}
                              control={
                                <Checkbox
                                  size="large"
                                  checked={checkedItem.includes(categorie)}
                                  onChange={handleChange}
                                />
                              }
                            />
                          );
                        })}
                    </FormGroup>
                  </FormControl>
                </div>
              </ThemeProvider>
              <div className="radio-container">
                <ThemeProvider theme={theme}>
                  <FormControl>
                    <FormLabel
                      id="radio-buttons-group-label"
                      className="sub-heading"
                      color="neutral"
                    >
                      Price
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="radio-buttons-group-label"
                      // defaultValue="High-Low"
                      name="controlled-radio-buttons-group"
                      // onChange={handleSort}
                      // value = {sort}
                    >
                      <FormControlLabel
                        value="descending"
                        control={
                          <Radio
                            checked={sort === "descending"}
                            onChange={handleSort}
                          />
                        }
                        label="High-Low"
                      />
                      <FormControlLabel
                        value="ascending"
                        control={
                          <Radio
                            checked={sort === "ascending"}
                            onChange={handleSort}
                          />
                        }
                        label="Low-High"
                      />
                    </RadioGroup>
                  </FormControl>
                </ThemeProvider>
              </div>
            </div>
            <div className="furnitured-container">
              {furnitures &&
                furnitures.map((furniture) => {
                  return <Card key={furniture._id} furnitures={furniture} isFeatured={false} />;
                  // return <Link to={`/furniture/${furniture._id}`}><Card key={furniture._id} furnitures={furniture} /></Link>
                })}
            </div>
          </div>
        </div>
        
      )}

      <Footer/>
    </>
  );
};

export default Furnitures;
