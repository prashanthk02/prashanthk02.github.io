import Link from "react-scroll/modules/components/Link";
import { animateScroll } from "react-scroll/modules";
import p from "../docs/p.jpg";
import { TbMenu } from "react-icons/tb";
import "../styles/navbar.css";

const Navbar = ({ mode }) => {
  return (
    <div className="navbar">
      <img
        className="navbar--avatar"
        src={p}
        alt="img"
        onClick={animateScroll.scrollToTop}
      />
      <div className="navbar--links">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
