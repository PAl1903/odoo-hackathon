import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import './RadioBtn.css';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    status: {
      // danger: "#e53e3e",
      danger: "#3591ca",
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
const RadioBtn = () => {
  return (
    <div className="radio-container">
      <ThemeProvider theme={theme}>
      <FormControl>
        <FormLabel id="radio-buttons-group-label" className="sub-heading" color="neutral">Price</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="High-Low"
          name="radio-buttons-group"
        >
          <FormControlLabel value="High-Low" control={<Radio />} label="High-Low" />
          <FormControlLabel value="Low-High" control={<Radio />} label="Low-High" />
        </RadioGroup>
      </FormControl>
      </ThemeProvider>
    </div>
  );
};

export default RadioBtn;
