import { Link } from "@mui/material";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import food from "../docs/food.mp4";
import what from "../docs/whatssup.mp4";
import "../styles/projects.css";

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="projects--container">
        <div className="projects--card">
          <div className="projects--title">
            <h2>what's sup</h2>
            <Link
              href="https://github.com/prashanthk02/whatssup"
              target="_blank"
              rel="noopener"
            >
              <FaGithub className="svg" />
            </Link>
          </div>

          <div className="projects--demo">
            <video
              playsInline
              muted
              autoPlay
              loop
              controls
              controlsList="nodownload"
              className="aaa"
            >
              <source src={what} type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>

          <p>
            What's sup is a recipe search web application that provides user
            with mutiple recipes based on four search criteria: cuisine,
            ingredients, calories and diet preference.
          </p>

          <span>
            <h3>Tech stack:</h3>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>NodeJs</li>
              <li>Sass</li>
              <li>PostgreSQL</li>
            </ul>
          </span>
        </div>

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

          <div className="projects--demo">
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

          <p>
            Food ordering is a web application that allows users to place an
            online order at a restaurant and notifies the user to pick up when
            the order is ready via text message as restaurant confirms.
          </p>

          <span>
            <h3>Tech stack:</h3>
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

          <div className="projects--demo">
            <img
              src="https://github.com/prashanthk02/scheduler/raw/master/docs/Form.png?raw=true"
              alt="Scheduler"
            />
          </div>

          <p>
            Scheduler is a single page application that allows students to book
            interview appointments with mentors, also allows to modify
            appointments if required. App is tested using Storybook, Jest and
            Cypress.
          </p>

          <span>
            <h3>Tech stack:</h3>
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Storybook</li>
              <li>Cypress</li>
            </ul>
          </span>
        </div>

        {!show && (
          <button className="projects--more--btn" onClick={() => setShow(true)}>
            [Show More +]
          </button>
        )}

        {show && (
          <>
            <div className="projects--card">
              <div className="projects--title">
                <h2>Tiny App</h2>
                <Link
                  href="https://github.com/prashanthk02/tinyapp"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub className="svg" />
                </Link>
              </div>

              <div className="projects--demo">
                <img
                  src="https://github.com/prashanthk02/tinyapp/blob/main/docs/MyUrls.png?raw=true"
                  alt="tinyapp"
                />
              </div>

              <p>
                TinyApp is a full stack web application built with Node and
                Express that allows users to shorten long URLs similar to
                bitly.com.
              </p>

              <span>
                <h3>Tech stack:</h3>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>EJS</li>
                  <li>BcryptJs</li>
                  <li>Cookie-session</li>
                </ul>
              </span>
            </div>

            <div className="projects--card">
              <div className="projects--title">
                <h2>Tweeter</h2>
                <Link
                  href="https://github.com/prashanthk02/tweeter"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub className="svg" />
                </Link>
              </div>

              <div className="projects--demo">
                <img
                  src="https://github.com/prashanthk02/tweeter/blob/master/docs/desktop.png?raw=true"
                  alt="tweeter"
                />
              </div>

              <p>
                Tweeter is a simple single-page Twitter clone built using
                jQuery, HTML5 and CSS3. It was buit to learn jQuery and
                responsive web design.
              </p>

              <span>
                <h3>Tech stack:</h3>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>jQuery</li>
                </ul>
              </span>
            </div>

            <div className="projects--card">
              <div className="projects--title">
                <h2>Jungle</h2>
                <Link
                  href="https://github.com/prashanthk02/jungle-rails"
                  target="_blank"
                  rel="noopener"
                >
                  <FaGithub className="svg" />
                </Link>
              </div>

              <div className="projects--demo">
                <img
                  src="https://github.com/prashanthk02/jungle-rails/blob/master/docs/home.png?raw=true"
                  alt="jungle"
                />
              </div>

              <p>
                A mini e-commerce application built with Rails 6.1 for purposes
                of learning Ruby. Using existing code base, implemented new
                features and styles.
              </p>

              <span>
                <h3>Tech stack:</h3>
                <ul>
                  <li>Rails</li>
                  <li>Bootstrap</li>
                  <li>PostgreSQL</li>
                  <li>Stripe</li>
                  <li>Rspec</li>
                  <li>Cypress</li>
                </ul>
              </span>
            </div>

            <button
              className="projects--more--btn"
              onClick={() => setShow(false)}
            >
              [Show Less -]
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
