import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../../assets/anne.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5 className="hola">Welcome To</h5>
                <h1>WorthWhileWeb</h1>
                <h5 className="text-light">Web Development Agency</h5>
                <h3>
                    Turning !deas into real life
                    <br />
                    <span className="gradient">products</span> is our calling.
                </h3>
                <CTA />
                <HeaderSocials />

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
