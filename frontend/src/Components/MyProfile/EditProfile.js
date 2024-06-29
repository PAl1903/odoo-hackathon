
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./EditProfile.css"
import uimg1 from "../../images/uimg1.png";
import { motion } from "framer-motion";
import { updateProfile } from '../../Actions/userActions';
// import { BrowserRouter as useNavigate } from "react-router-dom";


const opacityVariants={

  hidden:{

    x:-400,
    opacity:0,
  },

  visible:{
    x:0,
    opacity:1,
    transition:{type:"spring",duration:5,bounce:.3}
   
  }

}
const toggleButtonVariants = {
  hover: {
    scale: 0.9,
    transition: {
      yoyo: Infinity, // toggle type
    },
  },
};


const otherButtonVariants = {
  hover: {
    scale: 0.95,
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.25, duration: 0.7, type: "tween" },
  },
};

const infoAnimation={
  
  hidden:{

    opacity:0,
    scale: 0.6  
  },
  visible:{
    opacity:1,
    scale:1,
    transition:{type:"spring",duration:4,bounce:.3}
   
  }
}


const EditProfile = () => {

  // let navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [newuserdetails,setnewUserDetails] = useState({
    newname:"",
    newemail:""
  });
const submitHandler = (e) => {
e.preventDefault();
dispatch(updateProfile(newuserdetails.newname,newuserdetails.newemail));
}
  return (

      <div className='main-body'>
        
        <div className='profile-heading'>
          <h1

            variants={opacityVariants}
            initial="hidden"
            whileInView={"visible"}
            style={{fontFamily:"cursive"}}
            >My Profile</h1>
        </div>

        <div className='profile-container'>

          <motion.div  
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.3}}
            className='left-profile-container'>

            <div className='left-background'>
              {/* <img src={} /> */}
            </div>

            <div className="user-details">

              <div className="profile-pic">

                <motion.img 
                  variants={toggleButtonVariants}
                  whileHover="hover"
                  whileTap={"pressed"}
                  src= {uimg1} alt="pic" className='user-image'/>
                  
              </div>

              <div className='login-data'>

                  <div className='information'>

                    <div>
                      <div className='field-label'><span>User Name</span></div>
                      <div className='field-value'><span>{user.name}</span></div>
                    </div>

                    <div>
                      <div className='field-label'><span>Email</span></div>
                      <div className='field-value'><span>{user.username}</span></div>
                    </div>                   
                  
                  </div>

              </div>

            </div>
            
          </motion.div>

          <motion.div  
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.3}}
            className="right-container">

            <form autoComplete="on" className='change-details' onSubmit={submitHandler}>
              <div className="custom-input">
                <div className="icon">
                  <i class="fas fa-user"></i>
                </div>
                <input
                  name={"name"}
                  type="text"
                  placeholder="Change Name" 
                  value={newuserdetails.newname}
                  onChange={(e)=>{setnewUserDetails({...newuserdetails,newname:e.target.value})}}
                  required
                />
              </div>

              <div className="custom-input">
                <div className="icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <input
                  type={"email"}
                  name="username"
                  placeholder="Change Email"
                  value={newuserdetails.newemail}
                  onChange={(e)=>{setnewUserDetails({...newuserdetails,newemail:e.target.value})}}
                  required
                />
              </div>

              {/* <div className="custom-input">
                <div className="icon">
                  <i class="fas fa-lock"></i>
                </div>
                <input
                  type={"password"}
                  placeholder="Change Password"
                  minLength="8"
                />
              </div> */}

              {/* <div className="custom-input">
                <div className="icon">
                  <i class="fas fa-lock"></i>
                </div>
                <input
                  type={"password"}
                  placeholder="Confirm Password"
                  required
                />
              </div> */}
              <br></br>

              <div className='btn-div'>
              <motion.button
                type="submit"
                className="save-change"
                variants={otherButtonVariants}
                whileHover="hover"
                whileTap={"pressed"}
              >
                Save Change
              </motion.button>

              <NavLink  className={"back-home"} to="/home">
                  <div className='back-to-home'  
                  >
                      <h4  
                      variants={toggleButtonVariants}
                      whileHover="hover"
                      whileTap={"pressed"}> Back to Home</h4>
                  </div>
              </NavLink>
              </div>
            </form>

        </motion.div>
  
         </div>
         
      </div>
   
    );
  };

export default EditProfile