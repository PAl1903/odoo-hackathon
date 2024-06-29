import React from 'react'
import { motion } from "framer-motion";
import "./Main.css"


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
const textAnimation={

  hidden:{
    opacity:0,
    scale:.6
  },
  visible:{
    scale:1,
    opacity:1,
    transition:{type:"spring",  
        bounce:0.4,
        duration:4
    }
  }
}

const Main = () => {
  return (
  <>
  <div style={{ padding: "5vmax" }} className="main-div">

        <motion.div 
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{once:false,amount:0.5}}

          className="service-headings">
          <h5>SERVICES</h5>
          <h1>Our Latest Services</h1>
        </motion.div>
        <div className="service-body">
          <motion.div 
            variants={mainAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:.35}}
            transition={{staggerChildren:0.5}}
            className="service-body-parent"
          >

            <div className="service-body-child">
              <i class="fa-solid fa-route fa-3x"></i>
            </div>
            <h4  className="child-heading">City Transfer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nobis, assumenda.
            </p>
          </motion.div>

          <motion.div 
             variants={mainAnimation}
             initial="hidden"
             whileInView={"visible"}
             viewport={{once:false,amount:.35}}
             transition={{staggerChildren:0.5}}
              className="service-body-parent"
            >
            <div className="service-body-child">
              <i class="fa-solid fa-plane-departure fa-3x"></i>
            </div>

            <h4 className="child-heading">Airport Transfer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
              Minima, deserunt.
            </p>
          </motion.div>
        </div>
      </div>
  </>
  )
}

export default Main