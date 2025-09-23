import React, { useState } from "react";
import styles from "./register.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";


const Register = () => {
  const [step, setStep] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [rollno, setRollno] = useState("");
  const [pref1, setPref1] = useState("");
  const [pref2, setPref2] = useState("");
  const [pref3, setPref3] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !phone ||
      !year ||
      !rollno ||
      !pref1 ||
      !pref2 ||
      !pref3 ||
      !reason
    ) {
      alert("Please fill all the fields");
      return;
    }

    fetch(import.meta.env.VITE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name,
        phone,
        year,
        rollno,
        pref1,
        pref2,
        pref3,
        reason,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thank you for applying! We will get back to you soon.");
      })
      .catch((error) => console.error(error));
  };

  const steps = [
    // Step 1
    <>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          required
        />
      </label>

      <label className={styles.label}>
        Phone Number
        <input
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phone"
          required
        />
      </label>

      <label className={styles.label}>
        Year
        <input
          className={styles.input}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          type="text"
          name="year"
          readOnly
        />
      </label>

      <label className={styles.label}>
        Roll Number
        <input
          className={styles.input}
          value={rollno}
          type="text"
          name="rollno"
          required
          onChange={(e) => handleRollNumberChange(e.target.value)}
        />
      </label>
    </>,
    // Step 2
    <>
      <label className={styles.label}>
        Preference 1
        <select
          className={styles.select}
          value={pref1}
          onChange={(e) => setPref1(e.target.value)}
          name="pref1"
          required
        >
          <option value="">Select Team</option>
          <option value="Events">Events</option>
          <option value="Design">Design</option>
          <option value="Webops">Webops</option>
        </select>
      </label>

      <label className={styles.label}>
        Preference 2
        <select
          className={styles.select}
          value={pref2}
          onChange={(e) => setPref2(e.target.value)}
          name="pref2"
          required
        >
          <option value="">Select Team</option>
          <option value="Events">Events</option>
          <option value="Design">Design</option>
          <option value="Webops">Webops</option>
        </select>
      </label>

      <label className={styles.label}>
        Preference 3
        <select
          className={styles.select}
          value={pref3}
          onChange={(e) => setPref3(e.target.value)}
          name="pref3"
          required
        >
          <option value="">Select Team</option>
          <option value="Events">Events</option>
          <option value="Design">Design</option>
          <option value="Webops">Webops</option>
        </select>
      </label>
    </>,
    // Step 4
    <>
      <label className={styles.label}>
        Why do you want to be a part of Prodigy?
        <textarea
          className={styles.textarea}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          name="reason"
          rows="11"
          required
        ></textarea>
      </label>

      <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </>,
  ];

  const handleRollNumberChange = (value) => {
    setYear("");
    setRollno(value);

    if (value.length > 7) {
      if (value.substring(0, 3) === "114") {
        if (value.substring(4, 6) === "24") {
          setYear("2nd Year");
        } else if (value.substring(4, 6) === "25") {
          setYear("1st Year");
        } else {
          alert("Only 1st and 2nd Year students can register");
          setRollno("");
        }
      } else {
        alert("Only Production Department members can register");
        setRollno("");
      }
    }
  };

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        {/* Step container with animation */}
        <div className={styles.stepContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={styles.step}
            >
              {steps[step]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className={styles.nav}>
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className={styles.prevBtn}
          >
            <FaArrowLeft />
          </button>
          <div className={styles.dots}>
            {steps.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === step ? styles.active : ""}`}
              />
            ))}
          </div>

          <button type="button" onClick={nextStep} className={styles.nextBtn}>
            <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
