import React, { useRef, useEffect, useState } from "react";
import image from '../../assets/imgs/image.png';
import { Homeimg } from '../../assets/svgs/homeimg';
import '../../style/sec1.css';
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";



const Sec1 = () => {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100vh 0vh", "0vh 0vh"]
  });

  const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);


  return (
    <>
      <motion.div
        id="home"
        ref={ref}
        className={`sec1`}
        style={{
          opacity: scalP,
        }}>
        <div className="firstsec">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="46.Navigation"><path fill='white' d="M18 23.447 14.7 20a6 6 0 1 1 6.6 0zM18 11a3.99 3.99 0 0 0-2.121 7.376l.189.156L18 20.553l2.121-2.177A3.99 3.99 0 0 0 18 11z" /><path fill='white' d="M17 14h2v2h-2z" /><path fill='white' d="M12 24A12 12 0 1 1 23.182 7.636l-1.864.728a9.995 9.995 0 1 0-7.5 13.471l.362 1.967A12.029 12.029 0 0 1 12 24z" /><path fill='white' d="M2 15h9v2H2zM2 7h9v2H2zM11 1h2v8h-2z" /><path fill='white' d="M6 2h2v20H6zM16 2h2v5h-2z" /></g></svg>Based in <span>MOROCCO <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><path fill="#c1272d" d="M900 0H0v600h900z" /><path d="M450 224.315l-44.467 136.87 116.401-84.559h-143.87l116.403 84.559z" fill="none" stroke="#006233" stroke-width="14.63" /></svg></span>
        </div>
        <div className="content">
          <div className="txt-content">
            <p>Hi, I'm <span className="fancy"> Oussama Fannah</span></p>
            <p>A dedicated Full Stack / BackEnd Developer</p>
            {/* <p>Coding with Passion   ,   Building with Precision</p> */}
            <p>I'm open to new opportunities!  Take a look at my work </p>
            <div className="buttons">

              <button class="noselect noselect1">
                <span class="text">download my resume</span>
                <span class="icon">
                  <svg fill="#000000" width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z" /></svg>
                </span>
              </button>
              <button class="noselect noselect2">
                <span class="text">Contact </span>
                <span class="icon">
                  <svg fill="#000000" width="30" height="30" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="svgimage">
            <Homeimg />
          </div>
        </div>
      </motion.div >
    </>
  )
}

export default Sec1