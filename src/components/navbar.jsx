import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/navbar.css";
import { LightLogo } from "../assets/svgs/light_logo";
import { XTwitter } from "../assets/svgs/socials/x";
import { Linkedin } from "../assets/svgs/socials/linkedin";
// import { Facebook } from "../assets/svgs/socials/facebook";
// import { Instagram } from "../assets/svgs/socials/instagram";
import { Github } from "../assets/svgs/socials/github";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const navVariants = {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <motion.div
            className="navbar"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container nav-container">
                <div className="logo">
                    <LightLogo />
                </div>
                <input
                    className="checkbox"
                    type="checkbox"
                    name=""
                    id=""
                    checked={menuOpen}
                    onChange={toggleMenu}
                />
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                </div>
                <motion.div
                    className={`menu-items ${menuOpen ? "open" : ""}`}
                    variants={menuVariants}
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                >
                    <ul>
                        <li>
                            <motion.a className="menu-link" href="/" onClick={closeMenu}>Home</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#about"
                                onClick={closeMenu}
                            >About</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#portfolio"
                                onClick={closeMenu}
                            >Portfolio</motion.a>
                        </li>
                        <li>
                            <motion.a className="menu-link" href="#" onClick={closeMenu}>Blogs</motion.a>
                        </li>
                        <li>
                            <motion.a className="menu-link" href="#" onClick={closeMenu}>Contact</motion.a>
                        </li>
                    </ul>
                    <div className="montion">
                        <div className="socials">
                            <a href="https://www.linkedin.com">
                                <Linkedin />
                            </a>
                            <a href="https://twitter.com">
                                <XTwitter />
                            </a>
                            {/* <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Facebook />
              </a> */}
                            <a href="https://github.com">
                                <Github />
                            </a>
                        </div>
                        <h3>oussamafnh &copy;</h3>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

}

export default Navbar;
