import React from "react";
import "./Service.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Main from "./Main";



const pagesAnimation = {
 
  hidden: {
    opacity: 0,
    x: -500,
  },

  visible: {
    opacity: 1,
    x: 0, 
    transition: { delay: 0.15, duration: 2.5, type: "spring"},
  },
};

const textAnimation={

  hidden:{
    y:400,opacity:0
  },
  visible:{
    y:0,
    x:0,
    opacity:1,
    transition:{type:"spring",  
        bounce:0.4,
        duration:6
    }
  }
}

const mainAnimation ={
  hidden: {
    opacity: 0,
    scale:0.6
  },

  visible: {
    opacity: 1,
    x: 0, 
    scale:1,
    transition: { delay: 0.15, duration: 2.5, type: "spring"},
  },

}


const Service = () => {
  return (
    <>
      <motion.div 
        variants={pagesAnimation}
        initial="hidden"
        animate="visible"

      className="service-bg">
        <div className="service-nav">
          <Navbar />
        </div>
        <motion.div 
        variants={textAnimation}
        initial="hidden"
        animate={"visible"}
        className="service-info">
          <h1
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >Our Services</h1>

          <motion.p
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            className="text"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            eligendi saepe nesciunt totam commodi! Ullam tenetur reprehenderit
            cum! Quae expedita unde tenetur repellat atque nihil blanditiis aut
            adipisci odit velit!
          </motion.p>
          <motion.p 
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            <Link to="/contact" className="service-button">
            Contact Us
          </Link>
          </motion.p>
        </motion.div>
      </motion.div>

      <div
        // variants={mainAnimation}
        // initial="hidden"
        // whileInView={"visible"}
        // viewport={{once:false,amount:.35}}
        // transition={{staggerChildren:0.5}}
      >
        <Main/>
      </div>
      <Footer />

    </>
  );
};

export default Service;
