import React, { useState } from "react";
import styles from "./register.module.css";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  // Step 1
  <>
    <label className={styles.label}>
      Name
      <input className={styles.input} type="text" name="name" required />
    </label>

    <label className={styles.label}>
      Phone Number
      <input className={styles.input} type="text" name="phone" required />
    </label>
  </>,
  // Step 2
  <>
    <label className={styles.label}>
      Year
      <input className={styles.input} type="text" name="year" readOnly />
    </label>

    <label className={styles.label}>
      Roll Number
      <input className={styles.input} type="text" name="rollno" required />
    </label>
  </>,
  // Step 3
  <>
    <label className={styles.label}>
      Preference 1
      <select className={styles.select} name="pref1" required>
        <option value="">Select Team</option>
        <option value="Events">Events</option>
        <option value="Design">Design</option>
        <option value="Webops">Webops</option>
      </select>
    </label>

    <label className={styles.label}>
      Preference 2
      <select className={styles.select} name="pref2" required>
        <option value="">Select Team</option>
        <option value="Events">Events</option>
        <option value="Design">Design</option>
        <option value="Webops">Webops</option>
      </select>
    </label>

    <label className={styles.label}>
      Preference 3
      <select className={styles.select} name="pref3" required>
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
        name="reason"
        rows="4"
        required
      ></textarea>
    </label>
  </>,
];

const Register = () => {
  const [step, setStep] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

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

        <button type="submit" className={`${styles.submitBtn} ${step === steps.length - 1 ? styles.active : ""}`} enabled={step === steps.length - 1}>
          Submit
        </button>

        {/* Navigation */}
        <div className={styles.nav}>
          <button
            type="button"
            onClick={prevStep}
            disabled={step === 0}
            className={styles.prevBtn}
          >
            ⬅
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
            ➡
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
