import React from "react";
import "./projectsMe.css";
import projects from "../../../projects";

const ProjectsMe = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
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
                                    Github
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
