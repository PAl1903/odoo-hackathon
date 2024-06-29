import React from "react";
import Testimonials from "./Testimonials/Testimonials";
import "./About.css";
import { motion } from "framer-motion";
import Counters from "./Counters/Counters";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Background from "./bg.webp";
import { Link } from "react-router-dom";



const textAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
  },
  visible: {
    y: 0,
    x:0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 6 },
  },
};  
      
const pagesAnimation = {
  hidden: {
    opacity: 0,
    x: -400,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.15, duration: 2.5, type: "spring" },
  },
};

     
const transition = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.15, duration: 2.5, type: "spring" },
  },
};

const About = () => {
  // const transition = { type: "spring", duration: 3 };
  return (

    <div
     variants={pagesAnimation}
      initial="hidden"
      animate="visible"
      className="aboutUs"
    >
      <div className="parallax">
        <div
          variants={pagesAnimation}
          initial="hidden"
          animate="visible"
          className="bg"
        >
          <Navbar />
          <header>
            <motion.div
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className="text"
            >              
              <h1 style={{ color: 'white',fontWeight:'bold',fontSize:'3.5vmax'}}>About Us</h1>

              <motion.p
                variants={textAnimation}
                initial="hidden"
                animate="visible"
                className="text-p"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda 
                <br />
                iste facilis quos impedit fuga nobis modi debitis laboriosam velit
                reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
                sequi qui.
              </motion.p>
            </motion.div>
          </header>
        </div>
      </div>
      

      <Counters />

      <div className="main">
        <div className="partition">
          <div className="leftp">
            <div style={{}}>

              <motion.img
                src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=600"
                initial={{ opacity: 0, x: -100 }}
                transition={{ ...transition, duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{
                  height: "30vmax",
                  width: "27vmax",
                  padding:"3vmax",
                  position:"relative",
                  zIndex:9999,
                }}
              >
              </motion.img>

            </div>
            
          </div>
          
          <div className="rightp">
            
            
            <div style={{ }}> Welcome To RentIt</div>
            
            <div style={{ fontSize: "1vmax"}}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. On her way
              she met a copy. The copy warned the Little Blind Text, that where
              it came from it would have been rewritten a thousand times and
              everything that was left from its origin would be the word "and"
              and the Little Blind Text should turn around and return to its
              own, safe country. A small river named Duden flows by their place
              and supplies it with the necessary regelialia. It is a
        
            </div>

            <div style={{ marginTop: "16px" }}>
              <Link to="/furnitures" className="furnitureousel-button">
                Book A Car
              </Link>
            </div>
          </div>
        </div>

      </div>

      <Testimonials />

      <Footer />
      
      </div>
  );
};

export default About;
