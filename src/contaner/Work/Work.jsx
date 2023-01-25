import  { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from "../../constants";

import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';

const Work = () => {

  const works = [
    {
      title: "E-shop",
      name: "e-shop",
      tags: "React JS",
      imgUrl: images.eshop,
      projectLink: "https://ahmedsalem93.github.io/FULL-E-SHOP-Project1/",
      codeLink: "https://github.com/AhmedSalem93/FULL-E-SHOP-Project1",
      description: "full responsive E-com app with React firebase scss",
    },
    {
      title: "Clothing Store",
      name: " Clothing Store",
      tags: "js",
      imgUrl: images.cloth,
      projectLink: "https://ahmedsalem93.github.io/js-shop-card/",
      codeLink: "https://github.com/AhmedSalem93/js-shop-card",
      description: "full responsive E-com app with js only as CRUD app",
    },

    {
      title: "Kasper",
      name: " Kasper",
      tags: "html && css",
      imgUrl: images.casper,
      projectLink: "https://ahmedsalem93.github.io/HTML-AND-CSS-ONLY2/",
      codeLink: "https://github.com/AhmedSalem93/HTML-AND-CSS-ONLY2.git",
      description: "full responsive and animation web app with css only ",
    },
    {
      title: "Portfolio",
      name: "add",
      tags: "html && css",
      imgUrl: images.portfolio,
      projectLink: "https://ahmedsalem93.github.io/HTML-AND-CSS/",
      codeLink: "https://github.com/AhmedSalem93/HTML-AND-CSS",
      description: "full responsive and animation web app with css only",
    },
    {
      title: "Bandi Theme",
      name: "bandi",
      tags: "bootstrap",
      imgUrl: images.laptop,
      projectLink: "https://ahmedsalem93.github.io/Design-with-Bootstrap-5-/",
      codeLink: "https://github.com/AhmedSalem93/Design-with-Bootstrap-5-.git",
      description: "full responsive and animation web app with bootstrap5 ",
    },
    {
      title: "Shortly",
      name: " Shortly",
      tags: "tailwind",
      imgUrl: images.p1,
      projectLink: " https://ahmedsalem93.github.io/tailwindcss-project1/",
      codeLink: "https://github.com/AhmedSalem93/tailwindcss-project1",
      description: "full responsive web app with tailwind and js only",
    },
    {
      title: "Portfolio",
      name: "All-CSS",
      tags: "html && css",
      imgUrl: images.worksteps,
      projectLink: "https://ahmedsalem93.github.io/All-CSS/",
      codeLink: "https://github.com/AhmedSalem93/All-CSS.git",
      description: "full responsive and animation web app with css only",
    },
    {
      title: "Bookmark Website",
      name: " Bookmark Website",
      tags: "tailwind",
      imgUrl: images.p2,
      projectLink: "https://ahmedsalem93.github.io/tailwindcss-project2/",
      codeLink: "https://github.com/AhmedSalem93/tailwindcss-project2",
      description: "full responsive web app with tailwind and js only",
    },
  ];

  const [filterWork, setFilterWork] = useState( works );
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });




  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["html && css", "bootstrap","tailwind", "js", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primaryBg"
);


