import React from "react";
import "./Testimonials.css";
// import { testimonialData } from 'data'
import { useState } from "react";

import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { testimonialData } from "./data";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialData.length;
  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they say</span>
        <span>about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialData[selected].review}
        </motion.span>
        <span>
          <span>{testimonialData[selected].name}</span>

          <span>
            {"  -"}
            {testimonialData[selected].status}
          </span>
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          // key={selected}
          // initial={{ opacity: 0, x: 100 }}
          // animate={{ opacity: 1, x: 0 }}
          // exit={{ opacity: 0, x: -100 }}
          // transition={transition}

          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={testimonialData[selected].image}
          alt=""
        />

        <div className="arrows">
          <ArrowBackIosIcon
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            style={{ color: "#3591ca", height: "1.7rem" }}
          />
          <ArrowForwardIosIcon
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            style={{ color: "#3591ca", height: "1.7rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
