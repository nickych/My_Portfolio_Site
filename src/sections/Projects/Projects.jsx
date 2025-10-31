import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import qr_code from '../../assets/qr_code.png';
import Malware_Scanner from '../../assets/Malware_Scanner.png';
import Mortgage_Repayments from '../../assets/Mortgage_Repayments.png';
import PWD_Strength_Checker from '../../assets/PWD_Strength_Checker.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <motion.section
      id="projects"
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
        Projects
      </motion.h1>

      <motion.div
        className={styles.projectsContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard
            src={Malware_Scanner}
            link="https://github.com/nickych/Python_Malware-Scanner"
            h3="OFFLINE"
            p="Malware Scanner"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard
            src={PWD_Strength_Checker}
            link="https://github.com/nickych/password_strength_checker"
            h3="OFFLINE"
            p="PWD_Strength Checker"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard
            src={qr_code}
            link=""
            h3="WEB-BASED"
            p="Port_Vulnerability Scanner "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <ProjectCard
            src={Mortgage_Repayments}
            link="https://github.com/nickych/Streamlit_Mortgage-Repayments"
            h3="OFFLINE"
            p="Mortgage-Repayments"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;
