import React, { useRef, useState } from "react";
import worksData from "../../assets/works.json";
import "../../style/sec4.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const WorkShowcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["160vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.1, 1]);

    const handleProjectHover = (project) => {
        setSelectedProject(project);
    };

    return (
        <motion.div className="work" id='showcase' ref={ref}
            style={{
                opacity: scalP,
            }}>
            <div className="title">
                <p>WORKS SHOWCASE :</p>
            </div>
            <div className="work-showcase">
                <div className="project-list">
                    {worksData.map((project) => (
                        <div
                            key={project.title}
                            className="project-item"
                            onMouseEnter={() => handleProjectHover(project)}
                            onMouseLeave={() => handleProjectHover(null)}
                        >
                            {project.title}
                            <Link to={`/${project.liltitle.toLowerCase()}`} className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Get Details</span>
                            </Link>
                        </div>
                    ))}
                </div>

                <motion.div className="project-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {selectedProject && (
                        <>
                            <h2 className="detail-title">{selectedProject.title}</h2>
                            <p className="detail-languages">{selectedProject.languages.join(', ')}</p>
                            <motion.img
                                src={selectedProject.logo}
                                alt={selectedProject.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            />
                        </>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WorkShowcase;
