import React, { useState } from "react";
import furniture from "../../images/furniture.jpeg";
import hand11 from "../../images/hand11.png";
import hand2 from "../../images/hand2.png";

import { motion } from "framer-motion";
import "./AnimateImg.css";
const AnimateImg = () => {
  const y = 0;
  const [x, setX] = useState(100);

  const rightHand = {
    visible: {
      x: -180,
      opacity:1
    },

    hidden : {
      opacity:0
    }
  };

  const leftHand = {
    visible: {
      x: 150,
      opacity:1
    },
    
    hidden : {
      opacity:0
    }
  };

  const furnitureMove = {
    visible: {
      x: 300,
      opacity:1
    },
        
    hidden : {
      opacity:0
    }
  };

  return (
    <div className="img-wrapper">
      <div>
        <motion.img
          variants={leftHand}
          className="hand1"
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", duration: 1,delay:1.1 }}
          src={hand11}
          alt="hand"
        />
      </div>
      <div>
        <motion.img
          variants={rightHand}
          className="hand2"
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", duration: 1 , delay:1.5  }}
          src={hand2}
          alt="hand"
        />
      </div>
      <div>
        <motion.img
          variants={furnitureMove}
          className="furniture"
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", duration: 2 , delay:1.8 }}
          src={furniture}
          alt="hand"
        />
      </div>

      {/* <div className="rentIt">
        <img src={rentIt} alt="" />
      </div> */}
    </div>
  );
};

export default AnimateImg;
