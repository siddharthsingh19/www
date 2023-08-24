import React from "react";
import "./aboutMe.css";
import Me from "../../../assets/anne.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutMe = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <p>
                        A dedicated Frontend Developer based in Gurugram. As a Junior Frontend Developer, I possess an impressive arsenal of skills in HTML, CSS, Javascript, React, Tailwind and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
