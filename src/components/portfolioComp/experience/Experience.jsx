import React from "react";
import html from "../../../assets/html.webp";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import reactlogo from "../../../assets/react.webp";
import tw from "../../../assets/tw.png";
import ts from "../../../assets/ts.svg";
import sass from "../../../assets/sass.png";
import git from "../../../assets/git.png";
import vercel from '/src/vercel.png'
import { SiTailwindcss } from "react-icons/si";
import "./experience.css";
const Experience = () => {

    return (
        <section id="experience">
            <h5>What We Offer</h5>
            <h2>Our Services</h2>
            <div className="experience__container">
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={html} alt="" className="devlogo" />
                        <div>
                            <h4>Custom Web Development</h4>
                            {/* <small className="text-light">Experienced</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={css} alt="" className="devlogo" />
                        <div>
                            <h4>Responsive Web Design</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={js} alt="" className="devlogo" />
                        <div>
                            <h4>E-commerce Solutions</h4>
                            {/* <small className="text-light">Experienced</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={reactlogo} alt="" className="devlogo" />
                        <div>
                            <h4>Content Management Systems (CMS)</h4>
                            {/* <small className="text-light">Experienced</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <SiTailwindcss color="#06B6D4" className="devlogo" />
                        <div>
                            <h4>Mobile App Development</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={ts} alt="" className="devlogo" />
                        <div>
                            <h4>SEO Optimization</h4>
                            {/* <small className="text-light">Basic</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={sass} alt="" className="devlogo" />
                        <div>
                            <h4>API Integration</h4>
                            {/* <small className="text-light">Basic</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={git} alt="" className="devlogo" />
                        <div>
                            <h4>ERP Implementation</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={vercel} alt="" className="devlogo" />
                        <div>
                            <h4>Code Refactoring</h4>
                            {/* <small className="text-light">Intermediate</small> */}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Experience;
