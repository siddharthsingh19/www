import React from "react";
import "./projectsMe.css";
import projects from "../../../projects";
import {BsGithub} from 'react-icons/bs'
const ProjectsMe = () => {
    return (
        <section id="projects">
            <h5>Our Recent Works</h5>
            <h2>Portfolio</h2>
            <div className=" portfolio__container">
                {projects.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio_item-image">
                                <img className="project-img" src={image} alt="" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    <BsGithub className="gitlogo" /> Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
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

export default ProjectsMe;
