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
    setOpenMenu(false);
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
              <Link to="/" onClick={showFront}>Home</Link>
              {front && (
                <>
                  <ScrollLink to="aboutus" smooth={true} duration={1000}>
                    About
                  </ScrollLink>
                  <ScrollLink to="box1" smooth={true} duration={1000}>
                    Gallery
                  </ScrollLink>
                  <ScrollLink to="big-div" smooth={true} duration={1000}>
                    Testimonials
                  </ScrollLink>
                  <ScrollLink to="contactus" smooth={true} duration={1000}>
                    Contact
                  </ScrollLink>
                </>
              )}
              <Link to="/artists" onClick={hideFront}>Artists</Link>
              <Link to="/teams" onClick={hideFront}>Team</Link>
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
          <a
            href="https://maps.app.goo.gl/2RbqEKVWRWSRw9nE6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
>
  <Button
    className="button locationButton"
    variant="contained"
    style={{ padding: "auto 30px", marginLeft: "10px" }}
  >
    Location
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
        <Link to="/" onClick={showFront}>Home</Link>
        {front && (
          <>
            <ScrollLink to="aboutus" smooth={true} duration={1000}>
              About
            </ScrollLink>
            <ScrollLink to="box1" smooth={true} duration={1000}>
              Gallery
            </ScrollLink>
            <ScrollLink to="big-div" smooth={true} duration={1000}>
              Testimonials
            </ScrollLink>
            <ScrollLink to="contactus" smooth={true} duration={1000}>
              Contact
            </ScrollLink>
          </>
        )}
        <Link to="/artists" onClick={hideFront}>Artists</Link>
        <Link to="/teams" onClick={handleTeam}>Teams</Link>
      </div>
    </div>
  );
};

export default Navbar;
