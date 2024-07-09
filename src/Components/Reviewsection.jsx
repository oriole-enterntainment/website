import React, { useEffect, useState } from "react";
import "./Reviewsection.css";
import person1 from "./images/riya.jpeg";
import person2 from "./images/satvik.png";
import person3 from "./images/vedic.JPG";
import leftquoteicon from "./icons/left-quotes-black.svg";
import rightquoteicon from "./icons/right-quotes-black.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      const reviewSection = document.getElementById("big-div");
      if (reviewSection) {
        const rect = reviewSection.getBoundingClientRect();
        const threshold = 300; // Adjust this threshold as needed
        const isVisible =
          rect.bottom >= threshold &&
          rect.top <= window.innerHeight - threshold;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`review-section ${isVisible ? "visible" : ""}`}>
      <div id="big-div">
        <div
          id="box1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "20px 0px 20px 70px",
          }}
        >
          <h1 className="title">
            <span className="gradient">TESTIMONIALS </span> <br />
          </h1>
          <div
            id="box2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontWeight: "100", color: "black" }}>See what people think about us</p>
            <hr
              id="line"
              style={{
                border: ".5px orange solid",
                width: "120px",
                marginLeft: "10px",
              }}
            />
          </div>
        </div>
        <br />
        <div className="testimonials-section">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            minimumTouchDrag={80}
            pauseOnHover
            rewind
            rewindWithAnimation={false}
            keyBoardControl={true}
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >
            <div className="review">
              <div className="icon-image">
                <img src={person2} alt="satvik-pic" />
              </div>
              <div>
                <p>
                  <b>Satvik Gupta</b>
                </p>
                <p className="person-type">Attendee</p>
                <p className="testimonial-card-stars">★★★★★</p>
                <p>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={leftquoteicon}
                    alt="quote-icon"
                  />{" "}
                  <i>
                    Bassi is my favourite comedian and Oriole made my dream come
                    true by meeting him one day. Thank you so much!{" "}
                  </i>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={rightquoteicon}
                    alt="right-quotes"
                  />
                </p>
              </div>
            </div>

            <div className="review">
              <div className="icon-image">
                <img src={person1} alt="riya-pic" />
              </div>
              <div>
                <p>
                  <b>Person Four</b>
                </p>
                <p className="person-type">Attendee</p>
                <p className="testimonial-card-stars">★★★★★</p>
                <p>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={leftquoteicon}
                    alt="quote-icon"
                  />{" "}
                  <i>
                    Amazing experience! Will definitely come back next time.{" "}
                  </i>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={rightquoteicon}
                    alt="right-quotes"
                  />
                </p>
              </div>
            </div>

            <div className="review">
              <div className="icon-image">
                <img src={person1} alt="riya-pic" />
              </div>
              <div>
                <p>
                  <b>Person Five</b>
                </p>
                <p className="person-type">Attendee</p>
                <p className="testimonial-card-stars">★★★★★</p>
                <p>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={leftquoteicon}
                    alt="quote-icon"
                  />{" "}
                  <i>
                    Fantastic shows! Had a blast with my friends. Highly
                    recommend!{" "}
                  </i>
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={rightquoteicon}
                    alt="right-quotes"
                  />
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
