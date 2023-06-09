import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from "../../assets/project6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "My personal portfolio website",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Real Estate Price Predictor",
    github: "https://github.com/iamakashrout/House-Price-Predictor",
    demo: "https://hpp-frontend-a37m8k5o5-iamakashrout.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dynamic To-Do List",
    github: "https://github.com/iamakashrout/TARGET",
    demo: "https://target-rhzb.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather Application",
    github: "https://github.com/iamakashrout/SKY",
    demo: "https://sky-4n9g.onrender.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Static Travel Website page",
    github: "https://github.com/iamakashrout/FirstWebsite.github.io",
    demo: "https://iamakashrout.github.io/FirstWebsite.github.io/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Cloud Service with encryption",
    github: "https://github.com/iamakashrout/Comders_IEEE",
    demo: "https://drive.google.com/file/d/1ZsAeR7B8m7sDc6u7QKjWerC10e5SUfMQ/view",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
