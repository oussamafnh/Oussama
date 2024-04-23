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
import { useTranslation } from 'react-i18next';



const About = () => {

    const { t } = useTranslation();

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
                    <p>{t('about.title')}</p>
                </div>
                <div className="content">

                    <div className="leftside">
                        <img src={ImageX} alt="Profile" />
                    </div>
                    <div className="rightside">
                        <div className="infos">
                            <p className="q">{t('about.question1')}</p>
                            <p className='a'>{t('about.answer1')}</p>
                        </div>
                        <div className="infos">
                            <p className="q">{t('about.question2')}</p>
                            <p className='a'>{t('about.answer2')}</p>
                        </div>
                        <div className="infos">
                            <p className="q">{t('about.question3')}</p>
                            <p className='a'>{t('about.answer3')}</p>
                        </div>
                        <div className="infos">
                        <p className="q">{t('about.question4')}</p>
                        <p className='a'>{t('about.answer4')}</p>
                        </div>
                        <div className="infos">
                        <p className="q">{t('about.question5')}</p>
                            <p className='a'>JavaScript <Js /> , React <Reactjs /> , Node.js <Node /> , Php <Php /> , mySQL <Mysql /> , MongoDB <Mongodb /> , etc...</p>
                        </div>
                        <div className="infos">
                        <p className="q">{t('about.question6')}</p>
                            <p className='a'>
                            {t('about.answer61')} <Uk /> ,
                            {t('about.answer62')} <France /> ,
                            {t('about.answer63')} <Morocco />
                            </p>
                        </div>
                        <div className="infos">
                            <p className="q">{t('about.question7')}</p>
                            <p className='a'>{t('about.answer7')}</p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default About;
