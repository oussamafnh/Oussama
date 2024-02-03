// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "../style/navbar.css";
// import { LightLogo } from "../assets/svgs/light_logo";
// import { XTwitter } from "../assets/svgs/socials/x";
// import { Linkedin } from "../assets/svgs/socials/linkedin";
// import { Github } from "../assets/svgs/socials/github";


// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const closeMenu = () => {
//         setMenuOpen(false);
//     };

//     const menuVariants = {
//         hidden: { opacity: 0, x: 0, transition: { duration: 0.5 } },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//     };

//     const navVariants = {
//         hidden: { opacity: 0, y: -40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//     };

//     return (
//         <motion.div
//             className="navbar"
//             variants={navVariants}
//             initial="hidden"
//             animate="visible"
//         >
//             <div className="container nav-container">
//                 <div className="logo">
//                     <LightLogo />
//                 </div>
//                 <input
//                     className="checkbox"
//                     type="checkbox"
//                     name=""
//                     id=""
//                     checked={menuOpen}
//                     onChange={toggleMenu}
//                 />
//                 <div className="hamburger" onClick={toggleMenu}>
//                     <div></div>
//                 </div>
//                 <motion.div
//                     className={`menu-items ${menuOpen ? "open" : "close"}`}
//                     variants={menuVariants}
//                     initial="hidden"
//                     animate={menuOpen ? "visible" : "hidden"}
//                 >
//                     <ul>
//                         <li>
//                             <motion.a className="menu-link" href="/" onClick={closeMenu}>HOME</motion.a>
//                         </li>
//                         <li>
//                             <motion.a
//                                 className="menu-link"
//                                 href="#about"
//                                 onClick={closeMenu}
//                             >ABOUT</motion.a>
//                         </li>
//                         <li>
//                             <motion.a
//                                 className="menu-link"
//                                 href="#portfolio"
//                                 onClick={closeMenu}
//                             >SHOWCASE</motion.a>
//                         </li>
//                         <li>
//                             <motion.a className="menu-link" href="#" onClick={closeMenu}>BLOG</motion.a>
//                         </li>
//                         <li>
//                             <motion.a className="menu-link" href="#" onClick={closeMenu}>CONTACT</motion.a>
//                         </li>
//                     </ul>
//                     <div className="montion">
//                         <div className="socials">
//                             <a href="https://www.linkedin.com">
//                                 <Linkedin />
//                             </a>
//                             <a href="https://twitter.com">
//                                 <XTwitter />
//                             </a>
//                             <a href="https://github.com">
//                                 <Github />
//                             </a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//         </motion.div>
//     );

// }

// export default Navbar;



import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/navbar.css";
import { LightLogo } from "../assets/svgs/light_logo";
import { XTwitter } from "../assets/svgs/socials/x";
import { Linkedin } from "../assets/svgs/socials/linkedin";
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
                    {/* <LightLogo /> */}
                    <div class="container">
                        <div class="box">

                            <div class="title">
                                <span class="block"></span>
                                <LightLogo />
                            </div>

                        </div>
                    </div>
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
                            <motion.a className="menu-link" href="#home" onClick={closeMenu}>HOME</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#about"
                                onClick={closeMenu}
                            >ABOUT</motion.a>
                        </li>
                        <li>
                            <motion.a
                                className="menu-link"
                                href="#portfolio"
                                onClick={closeMenu}
                            >SHOWCASE</motion.a>
                        </li>
                        <li>
                            <motion.a className="menu-link" href="#" onClick={closeMenu}>BLOG</motion.a>
                        </li>
                        <li>
                            <motion.a className="menu-link" href="#contact" onClick={closeMenu}>CONTACT</motion.a>
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
