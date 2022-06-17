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
          <h1>
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
          I always had a passion to create web sites and web applications, so I
          took a step forward and decided to learn coding. I joined Lighthouse
          labs to pursue web development and transform my passion into a career,
          and successfully graduated as a Full stack web developer. In the
          journey I met some amazing instructors and wonderful fellow classmates
          who had the similar passion and goals.
        </p>
        <br />
        <p>
          I have 4 years of experience in the supply chain industry, gaining
          valuable and transferable skills in relationship building, strategic
          planning and project management. A strong track record of quick
          learning and adapting to new and complex situations.
        </p>
        <br />
        <p>
          I'm actively seeking opportunities and eager to leverage a diverse
          range of talents in a new and professional setting, committed to
          lifelong learning and personal development.
        </p>
      </div>
    </div>
  );
};

export default About;
