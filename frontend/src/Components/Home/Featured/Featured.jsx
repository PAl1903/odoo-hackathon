import React, { useEffect } from "react";
import "./Featured.css";
// import { Card } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
// import { Card } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedFurnitures } from "../../../Actions/furnitureActions";
import Card from "../../Card/Card";
// import "../../Card/Card.css";

const sliderAnimation={

  hidden:{
    opacity:0,
    scale:0.8
  },
  visible:{
    x:0,
    scale:1,
    opacity:1,
    transition:{type:"tween",  
        duration:1.5
    }
  }

}
const textAnimation = {
 
  hidden: {
    opacity: 0,
    scale:.6
  },

  visible: {
    opacity: 1,
    scale:1,
    transition: { delay: 0.15, duration: 2.5, type: "spring"},
  },
};



const Featured = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const dispatch = useDispatch();
  const {fFurnitures} = useSelector(state=>state.furnitures)
  useEffect(() => {
    
  dispatch(getFeaturedFurnitures());
    
  }, [dispatch])
  
  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:false,amount:0.25}}

          style={{
            textAlign: "center",
            marginTop: "3vmax",
            paddingTop: "40px",
          }}
        >
          <h4 style={{ color: "#3591ca" }}>What We Offer</h4>
          <h1>Featured Furniture</h1>
        </motion.div>
        <motion.div 
          variants={sliderAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:false,amount:0.35}}

        className="slider-div">
          <Slider {...settings} className="my-slider">
            {
              fFurnitures && fFurnitures.map((fFurniture)=>{
                 return <div>
                  <Card key={fFurniture._id} furnitures={fFurniture} isFeatured={true}/>
                 </div>
              })
            }
            {/* <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div> */}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default Featured;
