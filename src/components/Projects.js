import { Link } from '@mui/material';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoIosArrowDropdownCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
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
      <h2 className='neon'>Projects</h2>

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

        { show === 1 && <p>
          Whats sup is a recipe finder app built using react on the frontend and express on the backend,
          user can search for recipes by cuisine, ingredients, diet preference or
          can plan daily meals by calorie intake.
        </p>}
      </div>

      <div className='projects--container'>
        <div className='projects--title'>
          <button onClick={() => toggle(2)}>{show === 2 ? <IoIosArrowDropdownCircle /> : <IoIosArrowDroprightCircle /> }</button>
          <h3 onClick={() => toggle(2)}>Food order pickup</h3>
          <Link
            href='https://github.com/prashanthk02/Food-Order-pickup'
            target="_blank"
            rel="noopener"
          >
            {show === 2 && <FaGithub className='svg'/>}
          </Link>
        </div>

        { show === 2 && <p>
          Built using Express, jQuery,EJS and Twilio that allows users to
          place an online food orders at a restaurant and notifies to pick up
          when the order is ready for pickup via text message.
          Project was built as a Midterm-Project as student at Lighthouse labs
        </p>}
      </div>

    </div>
  )
}

export default Projects;