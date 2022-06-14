import "../styles/about.css";
import p from "../docs/p.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({ mode }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about">
      <div className="about--intro">
        <div>
          <h1 data-aos="fade-down-right" data-aos-duration="2500">
            👋🏼 Hello,
          </h1>

          <h3 className="about--i">My name is</h3>

          <h1
            className="about--first"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            PRASHANTH
          </h1>

          <h1
            className="about--last"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            KOMMIDI
          </h1>

          <br />

          <h3 className="about--i">I'm a</h3>

          <h2 className="about--f" data-aos="flip-up" data-aos-duration="2500">
            Full stack
          </h2>

          <h2
            className="about--w"
            data-aos="flip-down"
            data-aos-duration="2500"
          >
            Web developer 👨🏻‍💻
          </h2>
        </div>

        <img
          className={
            mode === "light" ? "about--img--light" : "about--img--dark"
          }
          src={p}
          alt="prashanth"
          data-aos="zoom-in-right"
          data-aos-duration="1500"
        />
      </div>

      <h2>About me</h2>

      <div className="about--desc">
        <p>
          I have 4+ years of experience in supply chain industry, 
          being a supply chain professional I gained experience in relationship building,
          project management and improving customer satisfaction, also skilled in quick learning
          and adapting to new and complex situations.
          With interest in technology and passion to build web applications I decided to make a carrer transition and learned to code,
          and as a developer I intend to create interactive applications
          that make people's lives easier. Eager to leverage
          a diverse range of talents in a new and engaging professional
          environment, committed to lifelong learning and personal development.
        </p>
      </div>
    </div>
  );
};

export default About;
