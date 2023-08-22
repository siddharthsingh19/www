import React from "react";
import "./projectsMe.css";
import Img1 from "../../../assets/anne.png";
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

                {/* <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article> */}

                {/* <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio_item-image">
                        <img src={Img1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a
                            href="https://github.com"
                            className="btn"
                            target="_blank"
                        >
                            Github
                        </a>
                        <a
                            href="https://github.com"
                            className="btn btn-primary"
                            target="_blank"
                        >
                            Live Demo
                        </a>
                    </div>
                </article> */}
            </div>
        </section>
    );
};

export default ProjectsMe;
