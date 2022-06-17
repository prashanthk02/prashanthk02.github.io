import { Link } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import food from "../docs/food.mp4";
import what from "../docs/whatssup.mp4";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="projects--container">
        <div className="projects--card">
          <div className="projects--title">
            <h2>whatssup</h2>
            <Link
              href="https://github.com/prashanthk02/whatssup"
              target="_blank"
              rel="noopener"
            >
              <FaGithub className="svg" />
            </Link>
          </div>

          <video
            playsInline
            muted
            autoPlay
            loop
            controls
            controlsList="nodownload"
            width="360px"
          >
            <source src={what} type="video/mp4" />
            Your browser does not support the video.
          </video>

          <p>
            What's sup is a recipe search web application that provides user
            with mutiple recipes based on four search criteria: cuisine,
            ingredients, calories and diet preference.
          </p>
          <br />
          <span>
            Tech stack:
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>NodeJs</li>
              <li>Sass</li>
              <li>PostgreSQL</li>
            </ul>
          </span>
        </div>

        {/* 2///////////////////////// */}

        <div className="projects--card">
          <div className="projects--title">
            <h2>Food ordering</h2>
            <Link
              href="https://github.com/prashanthk02/Food-Order-pickup"
              target="_blank"
              rel="noopener"
            >
              <FaGithub className="svg" />
            </Link>
          </div>

          <video
            playsInline
            muted
            autoPlay
            loop
            controls
            controlsList="nodownload"
            width="360px"
          >
            <source src={food} type="video/mp4" />
            Your browser does not support the video.
          </video>

          <p>
            Food ordering is a web application that allows users to place an
            online order at a restaurant and notifies the user to pick up when
            the order is ready via text message as restaurant confirms.
          </p>
          <br />
          <span>
            Tech stack:
            <ul>
              <li>Express</li>
              <li>jQuery</li>
              <li>EJS</li>
              <li>Sass</li>
              <li>PostgreSQL</li>
              <li>Twilio</li>
            </ul>
          </span>
        </div>

        {/* 3//////////////// */}

        <div className="projects--card">
          <div className="projects--title">
            <h2>Scheduler</h2>
            <Link
              href="https://github.com/prashanthk02/scheduler"
              target="_blank"
              rel="noopener"
            >
              <FaGithub className="svg" />
            </Link>
          </div>

          <img
            src="https://github.com/prashanthk02/scheduler/raw/master/docs/Form.png?raw=true"
            alt="Scheduler"
            width="360px"
          />

          <p>
            Scheduler is a single page application that allows students to book
            interview appointments with mentors, also allows to modify
            appointments if required. App is tested using Storybook, Jest and
            Cypress.
          </p>
          <br />
          <span>
            Tech stack:
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Storybook</li>
              <li>Cypress</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
