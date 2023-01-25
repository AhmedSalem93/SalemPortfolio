import { BsMessenger, BsLinkedin, BsInstagram } from "react-icons/bs";


const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/ahmed-salem-3967b7184/"
      target="_blank"
      rel="noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="https://m.me/Ahmed.Gamal.S93" target="_blank" rel="noreferrer">
      <BsMessenger />
    </a>
    <a
      href="https://www.instagram.com/a7mad_gamal93/"
      target="_blank"
      rel="noreferrer"
    >
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
