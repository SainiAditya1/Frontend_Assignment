import React from "react";
import { FaLinkedin, FaGithub} from 'react-icons/fa6';
import "./Footer.css";

const Footer = () => {
    const socials = [{
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aditya-saini-ba44261b8/',
      icon: <FaLinkedin />,
      hoverColor: 'hover:text-blue-800',
      darkhoverColor: 'dark:hover:text-blue-800',
    },
    {
      name: 'Github',
      link: 'https://github.com/SainiAditya1',
      icon: <FaGithub />,
      hoverColor: 'hover:text-black',
      darkhoverColor: 'dark:hover:text-white',
    },
];
  return (
    <div className="Footer">
      Built by <a href="https://github.com/SainiAditya1">Aditya Saini</a>. Find the
      source code{" "}
      <a href="https://github.com/SainiAditya1/QuickSell_Assignment">
        here.
      </a>

      





    </div>
  );
};

export default Footer;
