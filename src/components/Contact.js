import "../styles/contact.css";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { Link } from "@mui/material";

const Contact = ({ mode }) => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact--details">
        <Link
          className="contact--option"
          href="https://www.linkedin.com/in/pkommidi/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin className="contact--svg" />
        </Link>

        <Link
          className="contact--option"
          href="mailto:pkommidi@outlook.com"
          style={{ textDecoration: "none" }}
        >
          <FiMail className="contact--svg" />
          <p
            className={
              mode === "light"
                ? "contact--email--light"
                : "contact--email--dark"
            }
          >
            pkommidi@outlook.com
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
