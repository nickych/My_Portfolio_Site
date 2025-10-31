import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import styles from './HeroStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const typedRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Hi, am a',  'Cyber Security Analyst','and a', 'Python Developer'],
      typeSpeed: 130, loop: false,
    });

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.active);
      }
    });
  };

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={styles.colorModeContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Nicky Chibilika"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </motion.div>

      <motion.div
        className={`${styles.info} ${styles.active}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>
          NICKY
          <br />
          CHIBILIKA
        </h1>
        <h2>
          <span ref={typedRef} className=''></span>
        </h2>
        <span>
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </motion.a>
          <motion.a
            href="https://github.com/nickych"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src={githubIcon} alt="Github icon" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nicky-chibilika-3092b3203/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </motion.a>
        </span>
        <p>
          Zealous Cyber-Security Analyst <br /> crafting Python applications <br /> optimized for commercial <br /> enterprise integration.
        </p>
        <motion.a
          href="https://read.cv/chibilika"
          target='_blank'
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <button className={styles.hover}>Read Me</button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Hero />
    </ErrorBoundary>
  );
}

export default App;
