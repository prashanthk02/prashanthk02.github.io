import { Link } from "@mui/material";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import food from "../docs/food.mp4";
import what from "../docs/whatssup.mp4";
import "../styles/projects.css";

const Projects = () => {
  const [show, setShow] = useState(false);

  const toggle = (num) => {
    if (show === num) {
      return setShow(null);
    }
    return setShow(num);
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="projects--container">
        <div onClick={() => toggle(1)} className="projects--header">
          <img
            className="projects--thumb"
            src="https://github.com/prashanthk02/whatssup/blob/main/frontend/docs/Img1.png?raw=true"
          />
          <div className="projects--title">
            What's sup
            <br />
            Click to view demo
          </div>
        </div>

        {show === 1 && (
          <div className="projects--demo">
            <p>
              What's sup is a recipe search web application that provides user
              with mutiple recipes based on four search criteria: cuisine,
              ingredients, calories and diet preference. Registered users can be
              able to add a recipe to thier favorite list from search results.
            </p>
            <br />
            <p>
              Tech stack: React, Express, NodeJs, Sass, PostgreSQL
              <Link
                href="https://github.com/prashanthk02/whatssup"
                target="_blank"
                rel="noopener"
              >
                <FaGithub className="svg" />
              </Link>
            </p>
            <br />

            <video
              playsInline
              muted
              autoPlay
              loop
              controls
              controlsList="nodownload"
            >
              <source src={what} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        )}

        <div onClick={() => toggle(2)} className="projects--header">
          <img
            className="projects--thumb"
            src="https://github.com/prashanthk02/Food-Order-pickup/blob/master/docs/lhg-menupage.png?raw=true"
          />
          <div className="projects--title">
            Food ordering
            <br />
            Click to view demo
          </div>
        </div>

        {show === 2 && (
          <div className="projects--demo">
            <p>
              Food ordering is a web application that allows users to place an
              online order at a restaurant and notifies the user to pick up when
              the order is ready via text message as restaurant confirms.
            </p>
            <br />
            <p>
              Tech stack: Express, jQuery, EJS, Sass, PostgreSQL, Twilio
              <Link
                href="https://github.com/prashanthk02/Food-Order-pickup"
                target="_blank"
                rel="noopener"
              >
                <FaGithub className="svg" />
              </Link>
            </p>
            <br />

            <video
              playsInline
              muted
              autoPlay
              loop
              controls
              controlsList="nodownload"
            >
              <source src={food} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
