import '../styles/skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGithub, faSass } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className='skills'>
      <h2 className="neon">Skills</h2>
      <div className='skills--icons'>
        <FontAwesomeIcon className='skills--svg' icon={faReact}/>
        <FontAwesomeIcon className='skills--svg' icon={faNodeJs}/>
        <FontAwesomeIcon className='skills--svg' icon={faJsSquare}/>
        <FontAwesomeIcon className='skills--svg' icon={faHtml5}/>
        <FontAwesomeIcon className='skills--svg' icon={faCss3Alt}/>
        <FontAwesomeIcon className='skills--svg' icon={faGithub}/>
        <FontAwesomeIcon className='skills--svg' icon={faSass}/>
      </div>
    </div>
  )
}

export default Skills;