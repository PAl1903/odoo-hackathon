import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import "./CheckBox.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

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

const CheckBox = () => {
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
  return (
    <ThemeProvider theme={theme}>
      <div className="checkbox-container">
        <FormControl>
          <FormLabel className="sub-heading" color="neutral">Categories </FormLabel>
          <div className="divider"></div>
          <FormGroup>
            <FormControlLabel
              label="Sofa"
              value="Sofa"
              
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Sofa")}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              label="Tables"
              value="Tables"
              
              control={
                <Checkbox
                  size="large"
                  checked={checkedItem.includes("Tables")}
                  onChange={handleChange}
                />
              }
            />

            <FormControlLabel
              className="form-label"
              label="Desks"
              value="Desks"
              
              control={
                <Checkbox
                  size="large"
                  color="primary"
                  checked={checkedItem.includes("Desks")}
                  onChange={handleChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default CheckBox;
