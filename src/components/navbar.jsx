import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/navbar.css";
import { LightLogo } from "../assets/svgs/light_logo";
import { XTwitter } from "../assets/svgs/socials/x";
import { Linkedin } from "../assets/svgs/socials/linkedin";
import { Github } from "../assets/svgs/socials/github";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from 'react-i18next';


function Navbar() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const menuVariants = {
        hidden: { opacity: 0, x: 0, transition: { duration: 0.5 } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const navVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <div class="container">
                        <div class="box">

                            <div class="title">
                                <span class="block"></span>
                                <LightLogo />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="languageswitcher">
                    <LanguageSwitcher />
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
                    className={`menu-items ${menuOpen ? "open" : "close"}`}
                    variants={menuVariants}
                    initial="hidden"
                    animate={menuOpen ? "visible" : "hidden"}
                >
                    <ul>
                        <li>
                            <motion.a className="menu-link" href="#home" onClick={closeMenu}>{t('navbar.HOME')}</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#showcase"
                                onClick={closeMenu}
                            >{t('navbar.SHOWCASE')}</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#about"
                                onClick={closeMenu}
                            >{t('navbar.ABOUT')}</motion.a>
                        </li>
                        <li>
                            <motion.a className="menu-link" href="#contact" onClick={closeMenu}>{t('navbar.CONTACT')}</motion.a>
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
                            <a href="https://github.com">
                                <Github />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );

}

export default Navbar;
