import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "../../style/sec2.css";
import Morocco from '../../assets/svgs/flags/morocco';
import France from '../../assets/svgs/flags/france';
import Uk from '../../assets/svgs/flags/uk';
import Mongodb from '../../assets/svgs/languages/mongodb';
import Node from '../../assets/svgs/languages/node';
import Php from '../../assets/svgs/languages/php';
import Mysql from '../../assets/svgs/languages/mysql';
import Js from '../../assets/svgs/languages/js';
import Reactjs from '../../assets/svgs/languages/react';
import ImageX from "../../assets/imgs/img1.jpg";



const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);


    return (
        <motion.div className="about" id='about' ref={ref}
            style={{
                opacity: scalP,
            }}>
            <div className="aboutcontainer">
                {/* <div className='titleAbout'> <p> ABOUT ME </p> </div> */}
                <div className="title">
                    <p>ABOUT ME</p>
                </div>
                <div className="content">

                    <div className="leftside">
                        <img src={ImageX} alt="Profile" />
                    </div>
                    {/* <div className="rightside">
                    <div className="infos">
                    <p className="q">NAME</p>
                        <p className='a'>Oussama Fannah</p>
                        </div>
                        <div className="infos">
                        <p className="q">NATIONALITY</p>
                        <p className='a'>Moroccan</p>
                        </div>
                        <div className="infos">
                        <p className="q">PROFESSION</p>
                        <p className='a'>Full Stack / BackEnd Developer</p>
                    </div>
                    <div className="infos">
                        <p className="q">EDUCATION</p>
                        <p className='a'>OFPPT - Vocational School (2Y program)</p>
                        </div>
                        <div className="infos">
                        <p className="q">SKILLS</p>
                        <p className='a'>JavaScript, React, Node.js, etc.</p>
                    </div>
                    <div className="infos">
                    <p className="q">LANGUAGES</p>
                    <p className='a'>English, French, Arabic</p>
                    </div>
                    <div className="infos">
                        <p className="q">SUMMARY</p>
                        <p className='a'>Passionate and dedicated Full Stack / BackEnd Developer with a strong foundation in JavaScript, React, and Node.js. Eager to learn and adapt to new technologies. Enthusiastic about creating innovative solutions and contributing to the tech community.</p>
                    </div>
                </div> */}
                    <div className="rightside">
                        <div className="infos">
                            <p className="q">NAME</p>
                            <p className='a'>Oussama Fannah</p>
                        </div>
                        <div className="infos">
                            <p className="q">NATIONALITY</p>
                            <p className='a'>
                                Moroccan <Morocco />
                            </p>
                        </div>
                        <div className="infos">
                            <p className="q">PROFESSION</p>
                            <p className='a'>Full Stack / BackEnd Developer</p>
                        </div>
                        <div className="infos">
                            <p className="q">EDUCATION</p>
                            <p className='a'>OFPPT - Vocational School (2Y program)</p>
                        </div>
                        <div className="infos">
                            <p className="q">SKILLS</p>
                            <p className='a'>JavaScript <Js /> , React <Reactjs /> , Node.js <Node /> , Php <Php /> , mySQL <Mysql /> , MongoDB <Mongodb /> , etc...</p>
                        </div>
                        <div className="infos">
                            <p className="q">LANGUAGES</p>
                            <p className='a'>
                                English <Uk /> ,
                                French <France /> ,
                                Arabic <Morocco />
                            </p>
                        </div>
                        <div className="infos">
                            <p className="q">INTRODUCTION</p>
                            <p className='a'>Passionate and dedicated Full Stack / BackEnd Developer with a strong foundation in JavaScript, React, and Node.js. Eager to learn and adapt to new technologies. Enthusiastic about creating innovative solutions and contributing to the tech community.</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default About;
