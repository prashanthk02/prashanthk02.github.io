import "../styles/skills.css";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiChai,
  SiCypress,
  SiExpress,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMaterialui,
  SiMocha,
  SiMysql,
  SiPostgresql,
  SiRubyonrails,
  SiStorybook,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills--icons">
        <div
          className="skills--each--icon"
          data-aos="zoom-in-right"
          data-aos-duration="500"
        >
          <SiJavascript className="skills--svg" />
          <p>JavaScript</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          <FaHtml5 className="skills--svg" />
          <p>Html</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <FaCss3Alt className="skills--svg" />
          <p>Css</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <DiRuby className="skills--svg" />
          <p>Ruby</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-left"
          data-aos-duration="2500"
        >
          <FaNodeJs className="skills--svg" />
          <p>NodeJs</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-left"
          data-aos-duration="3000"
        >
          <FaReact className="skills--svg" />
          <p>React</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <SiExpress className="skills--svg" />
          <p>Express</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <SiJquery className="skills--svg" />
          <p>jQuery</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <FaBootstrap className="skills--svg" />
          <p>BootStrap</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <SiMaterialui className="skills--svg" />
          <p>MaterialUI</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-left"
          data-aos-duration="500"
        >
          <SiRubyonrails className="skills--svg" />
          <p>Rails</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <FaSass className="skills--svg" />
          <p>Sass</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <SiPostgresql className="skills--svg" />
          <p>PostgreSQL</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <SiMysql className="skills--svg" />
          <p>MySQL</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-right"
          data-aos-duration="2500"
        >
          <FaGithub className="skills--svg" />
          <p>Git</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-down"
          data-aos-duration="3000"
        >
          <SiMocha className="skills--svg" />
          <p>Mocha</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-up"
          data-aos-duration="2500"
        >
          <SiChai className="skills--svg" />
          <p>Chai</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <SiCypress className="skills--svg" />
          <p>Cypress</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-down"
          data-aos-duration="1500"
        >
          <SiJest className="skills--svg" />
          <p>Jest</p>
        </div>

        <div
          className="skills--each--icon"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <SiStorybook className="skills--svg" />
          <p>Storybook</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
