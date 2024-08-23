import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/ayush_pfp.jpeg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Ayush Pekamwar</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <div className="profile-links">
        <a href="https://github.com/Ayush-Pekamwar">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/@ayush_pekamwar">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/ayush-pekamwar/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
