import "./MySkill.css";
import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { SiExpress, SiMysql, SiSequelize } from "react-icons/si";

const MySkills = () => {
  const [isAss, setAss] = useState(false);
  const [first, setfirst] = useState("");

  const handleHover = (e) => {
    setAss((current) => !current);

    let clicked = e.target.firstChild.data;
    setfirst(clicked);
  };
  // -----------------------------------------------------

  const getText = (progLng) => {
    const programingLanguages = {
      JavaScript: `To make my websites more functional i deacided to learn JavaScript.Majority of knowledge is too from Johnases course from udemy and a lot of youtube videos (Fireship,WDS,FreeCodeCamp).I wisited the OdinProject site too where i gathered a lot of knowledhge too. `,
      CSS: `Before JS and after HTML, the middle programming tool that every programmer has to konw to make a beautiful website. Mostly the knowledge where i gathered about CSS is the udemy course from Johnas Schmmedtman and from youtube creators like Kevin Powell and WebDevSimplified.`,
      HTML: "HTML the first step for probably 99% of everyone who journeys into the world of programming. Like JS and CSS i learned this mainly from udemy courses beacuse it is not that complicated and with a straigt foward syntax.  ",
      MYSQL:"This program i learned through my NodeJS and JS course i took. Learned the basics of databases and relations between tables.",
      Git: "Learned from OdinProject and FreeCodeCamp",
      GitHub: "Learned from OdinProject and FreeCodeCamp",
      ReactJS: "aaaabbbb",
      NodeJS:"node",
      Express:"expres",
      SASS:"sass",
      Sequelize:"seque",

    };
    return programingLanguages[progLng] ?? "!404!";
  };

  let text = getText(first);

  return (
    <div className="MySkill">
      <div className="list-1">
        <h3 className="h3-programms">Programms:</h3>

        <ul className="ul1">
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            JavaScript
            <FaJsSquare />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            CSS
            <FaCss3Alt />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            HTML
            <FaHtml5 />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            MYSQL
            <SiMysql />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            Git
            <FaGitAlt />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            GitHub
            <FaGithub />
          </li>
        </ul>
      </div>
      <div className="infoOfList">
        {isAss ? (
          <div className="items">
            <p className="bbb">{text}</p>
          </div>
        ) : (
          <div className="items-clickATool">
            A little bit about the tools I use and where i learned them to use.
            Hower over a program.
          </div>
        )}
      </div>

      <div className="list-2">
        <h3 className="h3-frameLib">Frameworks:</h3>

        <ul className="ul2">
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            ReactJS
            <FaReact />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            NodeJS
            <FaNodeJs />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            Express
            <SiExpress />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            SASS
            <FaSass />
          </li>
          <li onMouseEnter={handleHover} onMouseLeave={handleHover}>
            Sequelize
            <SiSequelize />
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default MySkills;
