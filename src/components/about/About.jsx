import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaLocationArrow } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaLocationArrow className="about_icon" />
              <h5>Location</h5>
              <small>Chandigarh, India</small>
            </article>
            <article className="about_card">
              <FaSchool className="about_icon" />
              <h5>Education</h5>
              <small>Punjab Engineering College</small>
            </article>
            <article className="about_card">
              <IoMdSchool className="about_icon" />
              <h5>Degree</h5>
              <small>B.Tech, CSE</small>
            </article>
          </div>
          <p>
            As an ambitious, endeavouring and optimistic 20-year old undergrad,
            I am always interested in staying up to date with the latest
            developments in the fields of technology, science, business and
            finance. I constantly look forward towards learning new skills,
            exploring untapped ideas and acquiring more knowledge. Love
            interacting with new people and learning from their achievements and
            experiences. Never afraid of making mistakes, I try to solve
            problems in multiple ways and look for most efficient and effective
            solutions.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
