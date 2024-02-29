import React from "react";
import "./navbar.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaFileZipper } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiSolidMessageAltDetail } from "react-icons/bi";

const Navbar = () => {
    const navIcons = {
        // fontSize: "1.5rem",
        marginRight: "2rem",
    };

    const navIconsMobile = {
        fontSize: "1.5rem",
    };

    const linkStyle = {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "flex-end",
    };

    const linkStyleMobile = {
        textDecoration: "none",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    };

    return (
        <nav>
            <div className="nav-desk">
                <div className="wrapper-desk">
                    <ul>
                        <div>
                            <a href="#" style={linkStyle}>
                                <li>
                                    <FaHome style={navIcons} /> <p>Home</p>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="#about" style={linkStyle}>
                                <li>
                                    <ImUserTie style={navIcons} /> <p>About</p>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="#experience" style={linkStyle}>
                                <li>
                                    <BsBriefcaseFill style={navIcons} />{" "}
                                    <p>Services</p>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="#projects" style={linkStyle}>
                                <li>
                                    <FaFileZipper style={navIcons} />{" "}
                                    <p>Portfolio</p>
                                </li>
                            </a>
                        </div>
                        <div>
                            <a href="#contact" style={linkStyle}>
                                <li>
                                    <BiSolidMessageAltDetail style={navIcons} />{" "}
                                    <p>Contact</p>
                                </li>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="nav-mobile">
                <div className="wrapper-mobile">
                    <ul>
                        <li title="Home">
                            <a href="#" style={linkStyleMobile}>
                                <FaHome style={navIconsMobile} />
                            </a>
                        </li>
                        <li title="About">
                            <a href="#about" style={linkStyleMobile}>
                                <ImUserTie style={navIconsMobile} />
                            </a>
                        </li>
                        <li title="Experience">
                            <a href="#experience" style={linkStyleMobile}>
                                <BsBriefcaseFill style={navIconsMobile} />
                            </a>
                        </li>
                        <li title="Portfolio">
                            <a href="#projects" style={linkStyleMobile}>
                                <FaFileZipper style={navIconsMobile} />
                            </a>
                        </li>
                        <li title="Contact">
                            <a href="#contact" style={linkStyleMobile}>
                                <BiSolidMessageAltDetail
                                    style={navIconsMobile}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
