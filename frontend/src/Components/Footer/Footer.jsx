import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const textAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1.1,
    scale: 1,
    transition: { type: "spring", duration: 4, bounce: 0.3 },
  },
};

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
          className="footer-child-div"
        >
          <div className="footer-child-heading">RentIT</div>
          <div className="footer-child-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              Quas doloremque voluptatibus, consectetur aperiam nobis <br />{" "}
              autem explicabo laboriosam commodi, placeat, <br /> libero
              repudiandae odio harum sit id!
            </p>
          </div>
          <div className="social-icon">
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-facebook fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
          </div>
        </motion.div>

        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
          className="footer-child-div"
        >
          <div className="footer-child-heading">Information</div>
          <div className="footer-child-info">About</div>
          <div className="footer-child-info">Services</div>
          <div className="footer-child-info">Terms & Conditions</div>
          <div className="footer-child-info">Best Price Guarantee</div>
          <div className="footer-child-info">Privacy & Cookies Policy</div>
        </motion.div>

        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
          className="footer-child-div"
        >
          <div className="footer-child-heading">Customer Support</div>
          <div className="footer-child-info">FAQs</div>
          <div className="footer-child-info">Payment Option</div>
          <div className="footer-child-info">Booking Tips</div>
          <div className="footer-child-info">How It Works</div>
          <div className="footer-child-info">Contact Us</div>
        </motion.div>

        <motion.div
          variants={textAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.3 }}
          className="footer-child-div"
        >
          <div className="footer-child-heading">Have a Questions?</div>
          <div className="footer-child-info">
            203 Fake St. Mountain View, <br /> San Francisco, California, USA
          </div>
          <div className="footer-child-info">+2 392 3929 210</div>
          <div className="footer-child-info"> info@yourdomain.com</div>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;
