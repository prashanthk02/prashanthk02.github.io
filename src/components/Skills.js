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

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="neon">Skills</h2>
      <div className="skills--icons">

        <div className="skills--each--icon">
          <SiJavascript className="skills--svg" />
          <p>JavaScript</p>
        </div>

        <div className="skills--each--icon">  
          <FaHtml5 className="skills--svg" />
          <p>Html</p>
        </div>

        <div className="skills--each--icon">  
          <FaCss3Alt className="skills--svg" />
          <p>Css</p>
        </div>

        <div className="skills--each--icon">  
          <DiRuby className="skills--svg" />
          <p>Ruby</p>
        </div>

        <div className="skills--each--icon">  
          <FaNodeJs className="skills--svg" />
          <p>NodeJs</p>
        </div>

        <div className="skills--each--icon">  
          <FaReact className="skills--svg" />
          <p>React</p>
        </div>

        <div className="skills--each--icon">  
          <SiExpress className="skills--svg" />
          <p>Express</p>
        </div>

        <div className="skills--each--icon">  
          <SiJquery className="skills--svg" />
          <p>jQuery</p>
        </div>

        <div className="skills--each--icon">  
          <FaBootstrap className="skills--svg" />
          <p>BootStrap</p>
        </div>

        <div className="skills--each--icon">  
          <SiMaterialui className="skills--svg" />
          <p>MaterialUI</p>
        </div>

        <div className="skills--each--icon">  
          <SiRubyonrails className="skills--svg" />
          <p>Rails</p>
        </div>

        <div className="skills--each--icon">  
          <FaSass className="skills--svg" />
          <p>Sass</p>
        </div>

        <div className="skills--each--icon">  
          <SiPostgresql className="skills--svg" />
          <p>PostgreSQL</p>
        </div>

        <div className="skills--each--icon">  
          <SiMysql className="skills--svg" />
          <p>MySQL</p>
        </div>

        <div className="skills--each--icon">  
          <FaGithub className="skills--svg" />
          <p>Git</p>
        </div>

        <div className="skills--each--icon">  
          <SiMocha className="skills--svg" />
          <p>Mocha</p>
        </div>

        <div className="skills--each--icon">  
          <SiChai className="skills--svg" />
          <p>Chai</p>
        </div>

        <div className="skills--each--icon">  
          <SiJest className="skills--svg" />
          <p>Jest</p>
        </div>

        <div className="skills--each--icon">  
          <SiCypress className="skills--svg" />
          <p>Cypress</p>
        </div>

        <div className="skills--each--icon">  
          <SiStorybook className="skills--svg" />
          <p>Storybook</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
