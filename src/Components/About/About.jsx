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
            Oriole Entertainment is the pioneer of the Tier 2 and Tier 3 city
            comedy shows. We have been dedicated to making people laugh since
            2017 and plan to do it for the rest of our lives! We’re most
            popularly known as the house of Anubhav Singh Bassi and Harsh
            Gujral. Our shows have made people chuckle in cities like Agra,
            Gurugram, Lucknow, Kanpur, Dehradun and many more! Oriole
            Entertainment Pvt Ltd was founded by Ankur Bhargava.
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
                    <CountUp end={500000} duration={5} separator="," />
                  )}
                </h3>
                <p>Number of Tickets sold successfully to the customers.</p>
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
                  {animateCount && <CountUp end={75} duration={5} />}
                </h3>
                <p>
                  Presenting shows organized in the number of cities on-site.
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
                  {animateCount && <CountUp end={65} duration={5} suffix="+" />}
                </h3>
                <p>Collaborated with over 65 artists in our endeavors.</p>
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
                  {animateCount && <CountUp end={2500} duration={5} />}
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
