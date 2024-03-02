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
                            <h4>Software Development</h4>
                            <small className="text-light">Designing, developing, and implementing custom software solutions tailored to the client's specific needs and requirements.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={css} alt="" className="devlogo" />
                        <div>
                            <h4>Tehnology Consulting</h4>
                            <small className="text-light">Providing expert advice on technology strategy, architecture, and implementation to help clients make informed decisions about their IT investments.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={js} alt="" className="devlogo" />
                        <div>
                            <h4>Digital Transformation</h4>
                            <small className="text-light">Helping businesses modernize their IT infrastructure and processes to improve efficiency, reduce costs, and enhance customer experience.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={reactlogo} alt="" className="devlogo" />
                        <div>
                            <h4>Content Management Systems (CMS)</h4>
                            <small className="text-light">Designing, Developing and Implementing CMS for Businesses.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <SiTailwindcss color="#06B6D4" className="devlogo" />
                        <div>
                            <h4>Mobile App Development</h4>
                            <small className="text-light">Designing and developing mobile applications for iOS and Android platforms to help businesses reach their customers on the go.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={ts} alt="" className="devlogo" />
                        <div>
                            <h4>Cloud Computing</h4>
                            <small className="text-light">Advising on cloud migration strategies and helping clients leverage cloud services to scale their operations and improve agility.
</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={sass} alt="" className="devlogo" />
                        <div>
                            <h4>API Development and Integration</h4>
                            <small className="text-light">Developing and maintaing API's for all businesses for easy connectivity of softwares.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={git} alt="" className="devlogo" />
                        <div>
                            <h4>Quality Assurance and Testing</h4>
                            <small className="text-light">Ensuring the quality and reliability of software through comprehensive testing and quality assurance processes.</small>
                        </div>
                    </article>
                </div>
                <div className="experience__content">
                    <article className="experience__details">
                        <img src={vercel} alt="" className="devlogo" />
                        <div>
                            <h4>Data Analytics and Business Intelligence</h4>
                            <small className="text-light">10. Helping businesses leverage data to gain insights, make informed decisions, and drive business growth.
</small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Experience;
