import React, { useState, useRef } from "react";
import styles from "./hero.module.css";

const Hero = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [rollNo, setRollNo] = useState("");
  const [year, setYear] = useState("");

  const formRef = useRef(null); // ✅ form reference

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRollNoChange = (e) => {
    const value = e.target.value;
    setRollNo(value);

    if (value.length > 3 && value.substring(0, 3) !== "114") {
      alert("Only Production Engineering students are eligible for Inductions.");

    }
    if (value.length >= 9 && (value.substring(4, 6) === 24 || value.substring(4, 6) === 25)) {
      if (value.substring(4, 6) === "24") {
        setYear("2nd Year");
      } else if (value.substring(4, 6) === "25") {
        setYear("1st Year");
      }
    } else if (value.length >= 9 && (parseInt(value.substring(4, 6)) < 24)) {
      alert("Sorry, Inductions are not open for your batch.");
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Prodigy Inductions 2025</h1>
        <p>Prodigy is NIT Trichy’s premier student-driven innovation forum, bringing together creators, engineers, designers, and thinkers. We work across diverse domains — from technology and design to content and management — to build impactful projects and unforgettable experiences.

This is your chance to be part of a passionate community that values creativity, collaboration, and excellence.</p>
        <button
            className={styles.registerBtn}
            onClick={() => {
              setFormVisible(true);
              scrollToForm();
            }}
          >
            Register Now
          </button>
      </div>

      {/* Registration Form */}
        <form ref={formRef} className={styles.form}>
  <h2>Registration Form</h2>

  <div className={styles.gridContainer}>
    <label>
      Name
      <input type="text" name="name" required />
    </label>

    <label>
      Roll Number
      <input
        type="text"
        name="rollno"
        value={rollNo}
        onChange={handleRollNoChange}
        required
      />
    </label>

    <label>
      Year
      <input type="text" name="year" value={year} readOnly />
    </label>

    <label>
      Phone Number
      <input type="text" name="phone" required />
    </label>
  </div>

  <label>
    Preference 1
    <select name="pref1" required>
      <option value="">Select Team</option>
      <option value="technical">Technical</option>
      <option value="design">Design</option>
      <option value="content">Content</option>
      <option value="management">Management</option>
    </select>
  </label>

  <label>
    Preference 2
    <select name="pref2" required>
      <option value="">Select Team</option>
      <option value="technical">Technical</option>
      <option value="design">Design</option>
      <option value="content">Content</option>
      <option value="management">Management</option>
    </select>
  </label>

  <label>
    Preference 3
    <select name="pref3" required>
      <option value="">Select Team</option>
      <option value="technical">Technical</option>
      <option value="design">Design</option>
      <option value="content">Content</option>
      <option value="management">Management</option>
    </select>
  </label>

  <label>
    Why do you want to be a part of Prodigy?
    <textarea name="reason" rows="4" required></textarea>
  </label>

  <button type="submit" className={styles.submitBtn}>
    Submit
  </button>
</form>

      
    </div>
  );
};

export default Hero;
