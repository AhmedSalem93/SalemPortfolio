import { motion } from 'framer-motion';
import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';


const About = () => {


  const about = [
    {
      Title: "Front-end Developer",
      description: "make responsive website using Html&&Css",
      imgUrl: images.about01,
    },
    {
      Title: "React Developer",
      description: "with react && JS can i manipulate with element ",
      imgUrl: images.about02,
    },
    {
      Title: "Web Developer",
      description: "with firebase make full front&back-end website",
      imgUrl: images.about03,
    },
    // {
    //   Title: "Web Developer",
    //   description: "I am a good Web developer ",
    //   imgUrl: images.about04,
    // },
  ];

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.Title + index}
          >
            <img src={about.imgUrl} alt={about.Title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.Title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whiteBg"
);