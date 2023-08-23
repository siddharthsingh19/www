import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {FaHtml5,FaCss3Alt, FaReact } from 'react-icons/fa'
import {BiLogoJavascript } from 'react-icons/bi'
import {SiTailwindcss, SiTypescript } from 'react-icons/si'
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
                <div className="experience__container">
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaHtml5 className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaCss3Alt className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BiLogoJavascript className="experience__details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <FaReact className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiTailwindcss className="experience__details-icon" />
                            <div>
                                <h4>TailwindCSS</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details">
                            <SiTypescript className="experience__details-icon" />
                            <div>
                                <h4>Typescript</h4>
                                <small className="text-light">Nay</small>
                            </div>
                        </article>
                    </div>
                </div>
        </section>
    );
};

export default Experience;
