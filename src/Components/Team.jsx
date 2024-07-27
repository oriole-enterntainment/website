import React from "react";
import { Grid } from "@mui/material";
import "./Team.css";
import img1 from "../Assets/team/team-1.png";
import img2 from "../Assets/team/team-2.png";
import img3 from "../Assets/team/Aashish.PNG";
import img4 from "../Assets/team/Adnan Khan.jpg";
import img5 from "../Assets/team/Gourav Rao.jpg";
import img6 from "../Assets/team/Manav.jpg";
import img7 from "../Assets/team/Manish Tyagi.jpg";
import img8 from "../Assets/team/Navneet Kumar.jpg";
import img9 from "../Assets/team/Somya.jpg";
import img10 from "../Assets/team/Yash Bharadwaj.jpg";
import img11 from "../Assets/team/Yash Tiwari.jpg";
import img12 from "../Assets/team/Nabeel.jpg";
import img13 from "../Assets/team/Nitin Singh.jpg";
import img14 from "../Assets/team/Shaksham Mishra .PNG";
import img15 from "../Assets/team/naresh.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Team = () => {
  const data = [
    { photo: img15, name: "Naresh Kumar", role: "Manager" },
    { photo: img3, name: "Aashish Singh", role: "Manager ( Oriole Partnerships )" },
    { photo: img13, name: "Nitin Singh", role: "Artist Manager" },
    { photo: img12, name: "Nabeel Nawaz", role: "Artist Manager" },
    { photo: img14, name: "Saksham Mishra ", role: "Artist Manager" },
    { photo: img11, name: "Yash Tiwari", role: "Artist Manager" },
    { photo: img9, name: "Somya Supreet", role: "Artist Manager" },
    { photo: img10, name: "Yash Bharadwaj", role: "Artist Manager" },
    { photo: img8, name: "Navneet Kumar", role: "Assistant Manager ( Oriole Partnerships )" },
    { photo: img4, name: "Adnan Khan", role: "Event Programmer" },
    { photo: img6, name: "Manav Singh", role: "Artist Manager" },
    { photo: img5, name: "Gourav Rao", role: "Artist Manager" },
    { photo: img7, name: "Manish Tyagi", role: "Associate ( Oriole Partnerships)" },
  ];

  return (
    <div className="TeamBox">
      <div
        id="box1"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "85%",
          margin: "20px 0px",
        }}
      >
        <h1 className="title">
          <span className="gradient">TEAM </span> <br />
        </h1>
        <div
          id="box2"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "100", color: "grey" }}>CHECK OUT OUR TEAM</p>
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

      <div className="TeamGallery1">
        <div className="team">
          <img src={img1} alt="" />
          <div className="detail1">
            <a href="#">
              <TwitterIcon id="links1"></TwitterIcon>
            </a>
            <a href="">
              <InstagramIcon id="links1"></InstagramIcon>
            </a>
            <a href="#">
              <FacebookIcon id="links1"></FacebookIcon>
            </a>
            <a href="#">
              <LinkedInIcon id="links1"></LinkedInIcon>
            </a>
          </div>
          <div className="detail2">
            <p>
              Ankhur Bhargava <br /> <i id="role1"> Director </i>{" "}
            </p>
          </div>
        </div>
        <div className="team">
          <img src={img2} alt="" />
          <div className="detail1">
            <a href="#">
              <TwitterIcon id="links1"></TwitterIcon>
            </a>
            <a href="#">
              <InstagramIcon id="links1"></InstagramIcon>
            </a>
            <a href="#">
              <FacebookIcon id="links1"></FacebookIcon>
            </a>
            <a href="#">
              <LinkedInIcon id="links1"></LinkedInIcon>
            </a>
          </div>
          <div className="detail2">
            <p>
              Nupur Ankur <br /> Bhargava <br />{" "}
              <i id="role1"> Joint Director </i>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="TeamGallery2">
        {data.map((object) => {
          return (
            <div className="team">
              <img className="team-photo" src={object.photo} alt="" />
              <div className="detail4">
                <p>
                  {object.name} <br /> <i id="role2"> {object.role} </i>{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
