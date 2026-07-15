import React from "react";
import "./Team.css";
import img1 from "../Assets/team/team-1.png";
import img2 from "../Assets/team/team-2.png";
import img3 from "../Assets/team/Aashish.PNG";
import img4 from "../Assets/team/Adnan Khan.jpg";
import img11 from "../Assets/team/Yash Tiwari.jpg";
import img13 from "../Assets/team/Nitin Singh.jpg";
import img14 from "../Assets/team/saksham-2.jpeg";
import img15 from "../Assets/team/naresh_new.jpg";
import img6 from "../Assets/team/Manas Dubey.jpg";
import img8 from "../Assets/team/amanswaroop.jpeg";
import img9 from "../Assets/team/Sarthak Garg.jpg";
import img12 from "../Assets/team/Ajay Kumar.jpg";
import img51 from "../Assets/team/animeshh.jpeg";
import img52 from "../Assets/team/yamini-khanna.png";
import img53 from "../Assets/team/tushar-sharma.jpg";
import img54 from "../Assets/team/sumit.jpeg";
import img55 from "../Assets/team/divya.jpeg";
import img56 from "../Assets/team/sushant.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Team = () => {
  const data = [
    { photo: img15, name: "Naresh Kumar", role: "Manager" },
    { photo: img3, name: "Aashish Singh", role: "Manager ( Oriole Partnerships )" },
    { photo: img12, name: "Ajay Kumar", role: "Manager - Ground Operations" },
    { photo: img13, name: "Nitin Singh", role: "Sr. Artist Manager" },
    { photo: img14, name: "Saksham Mishra ", role: "Sr. A&R | Artist Manager" },
    { photo: img11, name: "Yash Tiwari", role: "Sr. Artist Manager" },
    { photo: img4, name: "Adnan Khan", role: "Sr. Event Programmer" },
    { photo: img9, name: "Sarthak Garg", role: "Associate, Marketing and Partnership" },
    { photo: img8, name: "Aman Swaroop", role: "Artist Manager" },
    { photo: img6, name: "Manas Dubey", role: "Artist Manager" },
    { photo: img51, name: "Animesh Singh", role: "Artist Manager" },
    { photo: img52, name: "Yamini Khanna", role: "Head of Creatives" },
    { photo: img53, name: "Tushar Sharma", role: "Artist Manager" },
    { photo: img54, name: "Sumit Jha", role: "Accountant" },
    { photo: img55, name: "Divya", role: "Marketing Associate" },
    { photo: img56, name: "Shushant Yadav", role: "Brands & Partnerships" },
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
              <TwitterIcon className="links1"></TwitterIcon>
            </a>
            <a href="">
              <InstagramIcon className="links1"></InstagramIcon>
            </a>
            <a href="#">
              <FacebookIcon className="links1"></FacebookIcon>
            </a>
            <a href="#">
              <LinkedInIcon className="links1"></LinkedInIcon>
            </a>
          </div>
          <div className="detail2">
            <p>
              Ankhur Bhargava <br /> <i className="role1"> Director </i>{" "}
            </p>
          </div>
        </div>
        <div className="team">
          <img src={img2} alt="" />
          <div className="detail1">
            <a href="#">
              <TwitterIcon className="links1"></TwitterIcon>
            </a>
            <a href="#">
              <InstagramIcon className="links1"></InstagramIcon>
            </a>
            <a href="#">
              <FacebookIcon className="links1"></FacebookIcon>
            </a>
            <a href="#">
              <LinkedInIcon className="links1"></LinkedInIcon>
            </a>
          </div>
          <div className="detail2">
            <p>
              Nupur Ankur <br /> Bhargava <br />{" "}
              <i className="role1"> Joint Director </i>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="TeamGallery2">
        {data.map((object, index) => {
          return (
            <div key={index} className="team">
              <img className="team-photo" src={object.photo} alt="" />
              <div className="detail4">
                <p>
                  {object.name} <br /> <i className="role2"> {object.role} </i>{" "}
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
