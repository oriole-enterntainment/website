import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import clsx from "clsx";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import MicExternalOnOutlinedIcon from "@mui/icons-material/MicExternalOnOutlined";
import InterpreterModeOutlinedIcon from "@mui/icons-material/InterpreterModeOutlined";

const About = () => {
  const [animateCount, setAnimateCount] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: false, // whether animation should happen only once - while scrolling down
    });

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById("aboutus");
    if (aboutSection && !animateCount) {
      const top = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.75) {
        setAnimateCount(true);
      }
    }
  };

  return (
    <div id="aboutus">
      <div style={{ height: "100%", margin: "50px 0px" }}>
        <div className={clsx(styles.creativity)} data-aos="fade-up">
          <h1 className={styles.title}>
            <span className={styles.gradient}>ABOUT </span> US <br />
          </h1>
          <p
            className={styles.desc}
            style={{ letterSpacing: "2px", fontWeight: "200" }}
          >
            <p><strong>Oriole Entertainment Pvt Ltd</strong> has been a trailblazer in bringing comedy shows to Tier 2 and Tier 3 cities since 2017. As the home of renowned comedians like <strong>Anubhav Singh Bassi</strong> and <strong>Harsh Gujral</strong>, we have been dedicated to spreading laughter across cities such as <strong>Agra, Gurugram, Lucknow, Kanpur, Dehradun</strong>, and many more. Founded by <strong>Ankur Bhargava</strong>, our mission is to continue making people laugh for years to come.</p>

          </p>

          <div className={styles.desktopcards}>
            <div
              className={clsx(styles.card, styles.thanks)}
              data-aos="fade-up"
            >
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <ReceiptOutlinedIcon
                    className={styles.icons}
                    style={{
                      color: "indianred",
                      transform: "rotate(25deg)",
                      margin: "15px",
                      fontSize: "60px",
                    }}
                  ></ReceiptOutlinedIcon>
                </div>
                <h3 className={styles.cardTitle}>
                  {animateCount && (
                    <CountUp end={1000000} duration={5} separator="," suffix="+" />
                  )} 
                </h3>
                <p>1 Mn+ Tickets sold and counting</p>
              </div>
            </div>
            <div
              className={clsx(styles.card, styles.CreatorStore)}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <BusinessOutlinedIcon
                    className={styles.icons}
                    style={{
                      color: "indianred",
                      margin: "15px",
                      fontSize: "60px",
                    }}
                  ></BusinessOutlinedIcon>
                </div>
                <h3 className={styles.cardTitle}>
                  {animateCount && <CountUp end={7000} duration={5} suffix="+" />} 
                </h3>
                <p>
                  7,000+ shows brought to life across cities
                </p>
              </div>
            </div>
            
            <div
              className={clsx(styles.card, styles.nftWithPerks)}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <MicExternalOnOutlinedIcon
                    className={styles.icons}
                    style={{
                      color: "indianred",
                      margin: "15px",
                      transform: "rotate(25deg)",
                      fontSize: "60px",
                    }}
                  ></MicExternalOnOutlinedIcon>
                </div>
                <h3 className={styles.cardTitle}>
                  {animateCount && <CountUp end={75} duration={5} suffix="+" />}
                </h3>
                <p>75+ Artists in collaboration during our journey</p>
              </div>
            </div>
            <div
              className={clsx(styles.card, styles.membership)}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={styles.cardInside}>
                <div className={styles.imgDiv}>
                  <InterpreterModeOutlinedIcon
                    className={styles.icons}
                    style={{
                      color: "indianred",
                      margin: "15px",
                      fontSize: "60px",
                    }}
                  ></InterpreterModeOutlinedIcon>
                </div>
                <h3 className={styles.cardTitle}>
                  {animateCount && <CountUp end={4000} duration={5} suffix="+"/>}
                </h3>
                <p>
                  Executed events in multiple cities, showcasing diverse shows
                  and entertainment experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.youtubeBox}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15%",
          marginBottom: "7%",
        }}
        data-aos="fade-up"
      >
        <iframe
          className={styles.youtubeLink}
          style={{ width: "80%", height: "500px" }}
          src="https://www.youtube.com/embed/KaZI8ry86dU?si=ou8lnl0U42ZXOChC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
