import React from "react";
import "./Footer.css";
import facebookicon from "./icons/facebook-logo.svg";
import instagramicon from "./icons/instagram-icon.svg";
import rightchevron from './icons/arrow-right.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footersection">
        <div className="footersection1">
          <div>
            <p
              style={{ fontSize: "1.4rem", fontWeight: "600" }}
              className="large-txt"
            >
              Oriole Entertainment{" "}
            </p>
            <p>
              <i>India's Biggest Live Stand Up Comedy Producers</i>
            </p>
            <p>First Floor, M3M URBANA, above Briyani Blues, R2- 104, Sector 67, Gurugram, Haryana 122101</p>
            <p>
              <b>Phone: </b>+91 078301 00001
            </p>
            <p>
              <b>Email: </b>team@orioleentertainment.com
            </p>
            <div className="fb-insta-icons"><a href="https://www.instagram.com/orioleentertainment/" target="_blank">
              <img src={facebookicon} alt="facebookicon" />
            </a>

            <a href="https://www.instagram.com/orioleentertainment/" target="_blank">
              <img src={instagramicon} alt="instaicon" />
            </a></div>
          </div>
        </div>

        <div className="footersection2">
          <p style={{ fontSize: "1.1rem" }}>Useful Links</p>
          <ul>
            <li>
             <img src={rightchevron} alt="rightarrow" /> <a href="/">Home </a>
            </li>
            <li>
              <img src={rightchevron} alt="rightarrow" /> <a href="/">About us </a>
            </li>
            <li>
              <img src={rightchevron} alt="rightarrow" /> <a href="/teams">Team </a>
            </li>
            <li>
              <img src={rightchevron} alt="rightarrow" /> <a href="/">Terms of service </a>
            </li>
            <li>
              <img src={rightchevron} alt="rightarrow" /> <a href="/">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* <div className="footersection3">
          <p>Our Newsletter</p>
          <br />
          <p>Never miss an event from your favorite comedians! </p>
          <p>Sign up for our newsletter and get regular updates</p>
          <p> on new events in your city</p><br /><br />
          <p className="sub-button">
            <button className="sub-buttonstyle">Subscribe</button>
          </p>
        </div> */}
      </div>

      <div className="footer-end">
        <p>© Copyright <b>Oriole Entertainment.</b> All Rights Reserved</p>
        <p>Designed with ❤ by <span>Oriole Entertainment</span></p>
      </div>
    </div>
  );
};

export default Footer;
