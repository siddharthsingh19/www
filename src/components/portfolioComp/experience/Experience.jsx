import React from "react";
import html from "../../../assets/html.webp";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import reactlogo from "../../../assets/react.webp";
import tw from "../../../assets/tw.png";
import ts from "../../../assets/ts.svg";
import sass from "../../../assets/sass.png";
import git from "../../../assets/git.png";
import { SiTailwindcss } from "react-icons/si";
import "./experience.css";
const Experience = () => {
    const logostyle = {
        marginTop: 5,
        width: 44,
        height: 44,
    };
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="experience__container">
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={html} style={logostyle} alt="" />
                        <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={css} style={logostyle} alt="" />
                        <div>
                            <h4>CSS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={js} style={logostyle} alt="" />
                        <div>
                            <h4>Javascript</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={reactlogo} style={logostyle} alt="" />
                        <div>
                            <h4>React</h4>
                            <small className="text-light">Experienced</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <SiTailwindcss size={40} color="#06B6D4" />
                        <div>
                            <h4>TailwindCSS</h4>
                            <small className="text-light">Intermediate</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={ts} style={logostyle} alt="" />
                        <div>
                            <h4>Typescript</h4>
                            <small className="text-light">Nay</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={sass} style={logostyle} alt="" />
                        <div>
                            <h4>Sass</h4>
                            <small className="text-light">Nay</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={git} style={logostyle} alt="" />
                        <div>
                            <h4>Git</h4>
                            <small className="text-light">Nay</small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Experience;
