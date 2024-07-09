import React from "react";
import { useState, useEffect } from "react";
import "./Slider_1.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";

const Slider_1 = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  useEffect(() => {
    showSlides(slideIndex);
    let timer = setInterval(() => {
      plusSlides(1);
    }, 7000); // Change the interval here to adjust the slide speed

    return () => clearInterval(timer);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade2" id="myslides1">
        <div className="mySlidesText fade2">
          <h1>
            India's Biggest
            <br />
            Live Stand Up Comedy
            <br />
            Producers
          </h1>
          <p>
            From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
            <br /> shows throughout the nation with various artists all through
            the year.
          </p>
          <Button
            variant="contained"
            style={{
              backgroundImage:
                "linear-Gradient(to right,  #ff6f51, #ff8d41, #ffaa37, #fcc737)",
              padding: "auto 30px",
            }}
          >
            <Link
              to="https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Book Now
            </Link>
          </Button>
        </div>
      </div>

      <div className="mySlides fade2" id="myslides2">
        <div className="mySlidesText fade2">
          <h1>
            India's Biggest
            <br />
            Live Stand Up Comedy
            <br />
            Producers
          </h1>
          <p>
            From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
            <br /> shows throughout the nation with various artists all through
            the year.
          </p>
          <br />
        </div>
      </div>

      <div className="mySlides fade2" id="myslides3">
        <div className="mySlidesText fade2">
          <h1>
            House of India's Top
            <br />
            Artists
          </h1>
          <p>
            From Tier-1 to Tier-3 cities, we organize & produce Stand-Up Comedy{" "}
            <br /> shows throughout the nation with various artists all through
            the year.
          </p>
          <br />
          <Button
            variant="contained"
            style={{
              backgroundImage:
                "linear-Gradient(to right,  #ff6f51, #ff8d41, #ffaa37, #fcc737)",
              padding: "auto 30px",
            }}
          >
            <Link
              to="/artists"
              style={{ textDecoration: "none", color: "white" }}
            >
              View Artists
            </Link>
          </Button>
        </div>
      </div>

      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "5%",
          left: "47%",
        }}
      >
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slider_1;
