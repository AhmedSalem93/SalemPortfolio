
import { Tooltip as ReactTooltip } from "react-tooltip";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";

import './Skills.scss';

const Skills = () => {

  const skills = [
    {
      icon: images.html,
      name: "html",
    },
    {
      icon: images.css,
      name: "css",
    },
    {
      icon: images.sass,
      name: "sass",
    },
    {
      icon: images.tail,
      name: "tailwind",
    },
    {
      icon: images.bootstrap,
      name: "bootstrap",
    },
    {
      icon: images.javascript,
      name: "javascript",
    },
    {
      icon: images.typescript,
      name: "typescript",
    },
    {
      icon: images.react,
      name: "reactJs",
    },
    {
      icon: images.redux,
      name: "redux",
    },
    {
      icon: images.reactRouter,
      name: "reactRouter",
    },
    {
      icon: images.python,
      name: "python",
    },
    {
      icon: images.php,
      name: "php",
    },
    {
      icon: images.mysql,
      name: "mysql",
    },
  ];
  const experiences = [
    {
      year: 2020,
      workName: "Front End React Entwickler",
      workCompany: "freelance",
      desc: "From 2020 I am studying and enrolling in different courses until I can work independently to create websites using different languages and libraries like React, Firebase, JavaScript , Bootstrap,  CSS and HTML",
    },
    
  ];


  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experience.workName}
                      key={experience.workName}
                    >
                      <h4 className="bold-text">{experience.workName}</h4>
                      <p className="p-text">{experience.workCompany}</p>
                    </motion.div>
                    <ReactTooltip
                      id={experience.workName}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {experience.desc}
                    </ReactTooltip>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whiteBg"
);

