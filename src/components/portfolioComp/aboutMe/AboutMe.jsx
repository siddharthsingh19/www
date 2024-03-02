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
            At WorthWhile Web, we are passionate about leveraging technology to
            drive innovation and solve complex business challenges. As a leading
            software consultancy firm, we specialize in providing expert
            guidance and solutions that empower organizations to thrive in the
            digital age.
          </p>
          <p>
            Our team of experienced consultants brings a wealth of knowledge and
            expertise across a wide range of industries and technologies.
            Whether you need help developing a custom software solution,
            optimizing your IT infrastructure, or navigating the complexities of
            digital transformation, we have the skills and experience to deliver
            results.
          </p>
          <p>
            We believe in forging long-term partnerships with our clients,
            working collaboratively to understand their unique needs and goals.
            By combining our technical expertise with a deep understanding of
            business strategy, we deliver solutions that are not only
            technically robust but also aligned with your broader business
            objectives.
          </p>
          <p>
            At WorthWhile Web, we are committed to excellence in everything we
            do. From the quality of our work to the professionalism of our team,
            we strive to exceed our clients' expectations and deliver
            exceptional value. Let us be your trusted partner on your journey to
            digital success.
          </p>
          {/* <h3>What Sets Us Apart</h3>
          <br />
          <ul>
            <li>
              <strong> Expertise:</strong> Our team of skilled developers and
              designers are experts in their craft, ensuring that your project
              is in the best hands.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in transparent and open
              communication, working closely with our clients to understand
              their vision and goals.
            </li>
            <li>
              <strong>Innovation:</strong> We stay at the forefront of
              technology trends, implementing cutting-edge solutions to give
              your project a competitive edge.
            </li>
            <li>
              <strong>Quality:</strong> We take pride in our work, delivering
              high-quality solutions that exceed expectations and drive results.
            </li>
          </ul> */}
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
