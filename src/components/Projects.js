import { Link } from '@mui/material';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import food from "../docs/food.mp4";
import what from "../docs/whatssup.mp4";
import '../styles/projects.css'

const Projects = () => {
  const [show, setShow] = useState(false);

  const toggle = (num) => {
    if (show === num) {
      return setShow(null);
    }
    return setShow(num);
  } 

  return (
    <div className='projects'>
      <h2>Projects</h2>

      <div className='projects--container'>
        <div className='projects--title'>
          <button onClick={() => toggle(1)}>{show === 1 ? <IoIosArrowDropdownCircle /> : <IoIosArrowDroprightCircle /> }</button>
          <h3 onClick={() => toggle(1)}>What's sup</h3>
          <Link
            href='https://github.com/prashanthk02/whatssup'
            target="_blank"
            rel="noopener"
          >
            {show === 1 && <FaGithub className='svg' />}
          </Link>
        </div>

        { show === 1 &&
        <div className='projects--demo'>
          <p>
            What's sup is a recipe search web application
            that provides user with mutiple recipes based
            on four search criteria: cuisine, ingredients,
            calories and diet preference.
            Registered users can be able to add a recipe to thier favorite list from search results.
          </p>
          <br />
          <p>Tech stack: React, Express, NodeJs, Sass, PostgreSQL</p>
          <br />

          <video playsInline muted autoPlay loop controls controlsList="nodownload">
            <source src={what} type="video/mp4" />
            Your browser does not support the video.
          </video>

        </div>
        }

      </div>

      <div className='projects--container'>
        <div className='projects--title'>
          <button onClick={() => toggle(2)}>{show === 2 ? <IoIosArrowDropdownCircle /> : <IoIosArrowDroprightCircle /> }</button>
          <h3 onClick={() => toggle(2)}>Food ordering</h3>
          <Link
            href='https://github.com/prashanthk02/Food-Order-pickup'
            target="_blank"
            rel="noopener"
          >
            {show === 2 && <FaGithub className='svg'/>}
          </Link>
        </div>

        { show === 2 &&
        <div className='projects--demo'>
          <p>
            Food ordering is a web application that allows users to
            place an online order at a restaurant and notifies the user to pick up
            when the order is ready via text message as restaurant confirms.
          </p>
          <br />
          <p>Tech stack: Express, jQuery, EJS, Sass, PostgreSQL, Twilio</p>
          <br />

          <video playsInline muted autoPlay loop controls controlsList="nodownload">
            <source src={food} type="video/mp4" />
            Your browser does not support the video.
          </video>

        </div>
        }
      </div>

    </div>
  )
}

export default Projects;