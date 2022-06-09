import "../styles/about.css";
import p from "../docs/p.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about--intro">
        <div>
          <h1>👋🏼 Hello,</h1>
          <h3 className="about--i">My name is</h3>
          <h1 className="about--first">PRASHANTH</h1>
          <h1 className="about--last">KOMMIDI</h1>
          <br />
          <h3 className="about--i">I'm a</h3>
          <h2 className="about--f">Full stack</h2>
          <h2 className="about--w">Web developer 👨🏻‍💻</h2>
        </div>
        <img className="about--img" src={p} alt="prashanth" />
      </div>
      <h2>About me</h2>
      <div className="about--desc">
        <p className="about--p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
