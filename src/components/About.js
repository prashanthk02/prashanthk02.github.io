import "../styles/about.css";
import p from "../docs/p.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = ({mode}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about">
      <div className="about--intro">
        <div>
          <h1 data-aos="fade-down-right" data-aos-duration="2500">👋🏼 Hello,</h1>
          <h3 className="about--i">My name is</h3>
          <h1 className="about--first" data-aos="fade-right" data-aos-duration="2500">PRASHANTH</h1>
          <h1 className="about--last" data-aos="fade-left" data-aos-duration="2500">KOMMIDI</h1>
          <br />
          <h3 className="about--i">I'm a</h3>
          <h2 className="about--f" data-aos="flip-up" data-aos-duration="2500">Full stack</h2>
          <h2 className="about--w" data-aos="flip-down" data-aos-duration="2500">Web developer 👨🏻‍💻</h2>
        </div>
        <img
        className={mode === "light" ? "about--img--light" : "about--img--dark"}
        src={p}
        alt="prashanth"
        data-aos="zoom-in-right"
        data-aos-duration="1500"
        />
      </div>
      <h2>About me</h2>
      <div className="about--desc">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default About;
