import { Link } from '@mui/material';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/projects.css'

const Projects = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='projects'>
      <h2 className='neon'>Projects</h2>
      <div className='projects--container'>
        <h3 className='projects--title'>What's sup</h3>
        <button onClick={() => setShow(!show)}>{show ? '-' : '+'}</button>
        <Link href='https://github.com/prashanthk02/whatssup' target="_blank" rel="noopener"><FaGithub /></Link>
        <p>
          Whats sup is a recipe finder app built using react on the frontend and express on the backend,
          user can search for recipes by cuisine, ingredients, diet preference or
          can plan daily meals by calorie intake.
        </p>
      </div>
    </div>
  )
}

export default Projects;