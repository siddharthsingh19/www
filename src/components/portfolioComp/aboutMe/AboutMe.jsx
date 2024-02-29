import React from "react";
import "./aboutMe.css";
import Me from "../../../assets/coder.gif";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutMe = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            We transform your digital ideas into captivating realities. With a
            passion for innovation and a commitment to excellence, we specialize
            in crafting custom web solutions that propel businesses forward.
            <br />
            At WorthWhileWeb, our mission is to empower businesses of all sizes
            to thrive in the digital world. We believe that every project is an
            opportunity to create something extraordinary, and we pour our
            creativity and expertise into every line of code we write.
            <br />
            <br />
            <h3>What Sets Us Apart</h3>
            <br />
            <ul>
              <li>
                <strong> Expertise:</strong> Our team of skilled developers and
                designers are experts in their craft, ensuring that your project
                is in the best hands.
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in transparent and
                open communication, working closely with our clients to
                understand their vision and goals.
              </li>
              <li>
                <strong>Innovation:</strong> We stay at the forefront of
                technology trends, implementing cutting-edge solutions to give
                your project a competitive edge.
              </li>
              <li>
                <strong>Quality:</strong> We take pride in our work, delivering
                high-quality solutions that exceed expectations and drive
                results.
              </li>
            </ul>
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
