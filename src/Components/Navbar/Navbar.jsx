import React, { useState } from "react";
import "./Navbar.css";
import { Button } from "@mui/material";
import Logo from "../../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  const [frontPage, setFrontPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [front, setFront] = useState(true);

  const showFront = () => {
    setFront(true);
    setOpenMenu(false);
    localStorage.setItem("frontPage", frontPage);
    navigate("/");
  };

  const hideFront = () => {
    setFront(false);
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleTeam = () => {
    navigate("/teams");
    setOpenMenu(!openMenu);
    setFront(false);
  };

  const barStyles = {
    bar: {
      backgroundColor: openMenu ? "rgb(247, 62, 62)" : "black",
    },
    bar1: {
      transform: openMenu
        ? "translate(0px,8px) rotate(-45deg)"
        : "rotate(0deg)",
    },
    bar2: {
      opacity: openMenu ? "0%" : "100%",
    },
    bar3: {
      transform: openMenu
        ? "translate(0px,-14px) rotate(45deg)"
        : "rotate(0deg)",
    },
  };

  return (
    <div id="navbarBox" style={{ zIndex: "100", backgroundColor: "white" }}>
      <div className="navbar">
        <img src={Logo} alt="" id="navbarLogo" onClick={showFront} />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div id="navbarLinks">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <a href="#" onClick={showFront}>
                  Home
                </a>
              </Link>
              {front && (
                <>
                  <ScrollLink to="aboutus" smooth={true} duration={1000}>
                    <a href="#aboutus">About</a>
                  </ScrollLink>
                  <ScrollLink to="box1" smooth={true} duration={1000}>
                    <a href="#box1">Gallery</a>
                  </ScrollLink>
                  <ScrollLink to="big-div" smooth={true} duration={1000}>
                    <a href="#big-div">Testimonials</a>
                  </ScrollLink>
                  <ScrollLink to="contactus" smooth={true} duration={1000}>
                    <a href="#contactus">Contact</a>
                  </ScrollLink>
                </>
              )}
              <Link to="/artists">
                <a href="#" onClick={hideFront}>
                  Artists
                </a>
              </Link>
              <Link to="/teams">
                <a href="#" onClick={hideFront}>
                  Teams
                </a>
              </Link>
              {/* <div id='submenu'>
                                <a style={{ display: 'flex', alignItems: 'center' }}>Others <KeyboardArrowDownIcon style={{ fontWeight: '10', marginLeft: '2px' }}></KeyboardArrowDownIcon></a>
                                <ul id='submenuList'>
                                    <Link to="/team">Team</Link>
                                    <li>Calendar</li>
                                </ul>
                            </div> */}
            </div>
          </div>
          <a
            href="https://in.bookmyshow.com/events/oriole-entertainment-live/ET00316295"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              className="button"
              variant="contained"
              style={{
                // backgroundImage: 'linear-gradient(to right, #ff6f51, #ff8d41, #ffaa37, #fcc737)',
                padding: "auto 30px",
              }}
            >
              Book Now
            </Button>
          </a>
          <div className="menuButton" onClick={handleOpenMenu}>
            <div
              id="bar1"
              className="bar"
              style={{ ...barStyles.bar, ...barStyles.bar1 }}
            ></div>
            <div
              id="bar2"
              className="bar"
              style={{ ...barStyles.bar, ...barStyles.bar2 }}
            ></div>
            <div
              id="bar3"
              className="bar"
              style={{ ...barStyles.bar, ...barStyles.bar3 }}
            ></div>
          </div>
        </div>
      </div>

      <div id="navbar2links" style={{ width: openMenu ? "100%" : "0%" }}>
        <Link to="/">
          <a href="#" onClick={showFront}>
            Home
          </a>
        </Link>
        {front && (
          <>
            <ScrollLink to="aboutus" smooth={true} duration={1000}>
              <a href="#">About</a>
            </ScrollLink>
            <ScrollLink to="box1" smooth={true} duration={1000}>
              <a href="#">Gallery</a>
            </ScrollLink>
            <ScrollLink to="big-div" smooth={true} duration={1000}>
              <a href="#">Testimonials</a>
            </ScrollLink>
            <ScrollLink to="contactus" smooth={true} duration={1000}>
              <a href="#">Contact</a>
            </ScrollLink>
          </>
        )}
        <Link to="/artists">
          <a href="#" onClick={hideFront}>
            Artists
          </a>
        </Link>
        <a onClick={handleTeam}>Teams</a>
      </div>
    </div>
  );
};

export default Navbar;
