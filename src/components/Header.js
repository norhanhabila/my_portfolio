import React from 'react';
import "../App.css";
import profilePicture from "../assets/IMG_1989.jpg";

const Header = () => (
  <header style={{backgroundSize: "cover",
    backgroundPosition: "center",
     backgroundImage: "url('https://content.linkedin.com/content/dam/me/business/en-us/amp/learning-solutions/images/lls-resources/tech-skills/bg/tech-growth-hero-bg-dsk-v03.png.original.png')" }}>
     <div className="profile-picture-container">
     <img src={profilePicture} alt="Norhan Habila" className="profile-picture" />
  </div>
    <h1>Norhan Habila</h1>
    <h2>A Full-stack Web Developer</h2>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#education">Education</a>
    </nav>
  </header>
);

export default Header;
