import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h1>

      <motion.form
        action="https://formspree.io/f/xnnvdybn"
        method="post"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="formGroup"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" hidden>
            Name
          </label>
          <motion.input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="formGroup"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" hidden>
            Email
          </label>
          <motion.input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="formGroup"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" hidden>
            Message
          </label>
          <motion.textarea
            name="message"
            id="message"
            placeholder="Text Nicky Chibilika"
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          ></motion.textarea>
        </motion.div>

        <motion.input
          className="hover btn"
          type="submit"
          value="Submit "
          whileHover={{ scale: 1.05 }}
        />
      </motion.form>
    </motion.section>
  );
}

export default Contact;
