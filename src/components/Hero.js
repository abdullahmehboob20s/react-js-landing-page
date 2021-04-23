import React from "react";
import image from "../images/manCoding.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

// libraries I Used In This Project
// 1) React Icons
// 2) Framer Motion

function Hero() {
  let openLink = (link) => {
    window.open(link, "_blank");
  };

  let cudeVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="Hero">
      <motion.div
        className="blob"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        variants={cudeVariants}
        initial="hidden"
        animate="shown"
        className="cube"
      >
        <div className="circle_1"></div>
        <div className="circle_2"></div>
        <div className="circle_3"></div>
        <div className="circle_4"></div>
      </motion.div>
      <div className="Hero_content">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="Hero_content_1"
        >
          <h3>Hello I am</h3>
          <h1>abdullah mehboob</h1>
          <h3 className="Hero_content_1_LastH3">
            Ui & Ux{" "}
            <span style={{ color: "#EFA7A2", fontWeight: "bold" }}>
              Designer
            </span>
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="Hero_content_2"
        >
          <div className="Hero_content_2_buttons">
            <button>hire me</button>
            <button>See My Resume</button>
          </div>
          <div className="Hero_content_2_content">
            <h3>introduction</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="Hero_ImageArea">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="ImageArea_ImageBox">
            <img src={image} className="ImageArea_ImageBox_image" alt="" />
          </div>
          <div className="Hero_ImageArea_Social_Icons">
            <div
              style={{ backgroundColor: "#4B6CA8" }}
              className="Hero_imageArea_Icons"
              onClick={() => openLink("https://www.facebook.com/")}
            >
              <FaFacebookF color="white" size={22} />
            </div>
            <div
              style={{ backgroundColor: "#10669B" }}
              className="Hero_imageArea_Icons"
              onClick={() => openLink("https://www.instagram.com/")}
            >
              <FaInstagram color="white" size={22} />
            </div>
            <div
              style={{ backgroundColor: "#018CC3" }}
              className="Hero_imageArea_Icons"
              onClick={() => openLink("https://www.linkedin.com")}
            >
              <FaLinkedinIn color="white" size={22} />
            </div>
            <div
              style={{ backgroundColor: "#62BBF5" }}
              className="Hero_imageArea_Icons"
              onClick={() => openLink("https://www.twitter.com/")}
            >
              <FaTwitter color="white" size={22} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
