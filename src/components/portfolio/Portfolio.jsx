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
    title: "OneWorld: Social Media Application",
    github: "https://github.com/iamakashrout/Social-Media-Application",
    demo: "https://oneworld-blush.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "MediCare: Online Medical Consultation",
    github: "https://github.com/iamakashrout/Online-Medical-Consultation",
    demo: "https://medicare-phi-three.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Real Estate Price Predictor",
    github: "https://github.com/iamakashrout/House-Price-Predictor",
    demo: "https://hpp-frontend.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "My personal portfolio website",
    github: "https://github.com/iamakashrout/Portfolio",
    demo: "https://akashrout.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather Application",
    github: "https://github.com/iamakashrout/SKY",
    demo: "https://sky-4n9g.onrender.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Dynamic To-Do List",
    github: "https://github.com/iamakashrout/TARGET",
    demo: "https://target-rhzb.onrender.com/",
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
