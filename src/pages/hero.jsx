import React, { useState } from "react";
import styles from "./hero.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import prodigy from "../assets/prodigy.png";
import pea from "../assets/pea.png";

const Hero = () => {
  const [expanding, setExpanding] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setExpanding(true);
    setTimeout(() => {
      navigate("/register"); // navigate after animation
    }, 1700); // match animation duration
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.logoContainer}>
          <img src={prodigy} alt="Prodigy Logo" className={styles.logo} />
          <img src={pea} alt="PEA Logo" className={styles.logo} />
        </div>

        <h1>Prodigy Inductions 2025</h1>
        <p>
          Prodigy is NIT Trichy’s premier student-driven innovation forum,
          bringing together creators, engineers, designers, and thinkers. We
          work across diverse domains — from technology and design to content
          and management — to build impactful projects and unforgettable
          experiences. This is your chance to be part of a passionate community
          that values creativity, collaboration, and excellence.
        </p>
        <button
          className={styles.registerBtn}
          onClick={() => {
            handleClick();
          }}
        >
          Register Now
        </button>

        <AnimatePresence>
        {expanding && (
          <motion.div
            initial={{ scale: 0, borderRadius: "50%" }}
            animate={{ scale: 100, borderRadius: "50%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: "88%",
              left: "50%",
              width: "20px",
              height: "20px",
              border: "2px solid #6a00f4",
              backgroundColor: "#121212",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
            }}
          />
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
