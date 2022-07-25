import Link from "react-scroll/modules/components/Link";
import { animateScroll } from "react-scroll/modules";
import p from "../docs/p.png";
import "../styles/navbar.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <img
        className="navbar--avatar"
        src={p}
        alt="img"
        onClick={animateScroll.scrollToTop}
      />
      <div className="navbar--links">
        <Link to="about" smooth={true} duration={750}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={750}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={750}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={750}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={750}>
          Contact
        </Link>
      </div>

      <div className="navbar--hammenu">
        <div className="navbar--hammenu--icon" onClick={() => toggle()}>
          {show ? <IoClose /> : <HiMenuAlt4 />}
        </div>
        {show && (
          <div className="navbar--hammenu--options">
            <Link
              to="about"
              smooth={true}
              duration={1500}
              onClick={() => toggle()}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={1500}
              onClick={() => toggle()}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1500}
              onClick={() => toggle()}
            >
              Projects
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1500}
              onClick={() => toggle()}
            >
              Experience
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              onClick={() => toggle()}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
