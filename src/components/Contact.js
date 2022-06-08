import '../styles/contact.css';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from '@mui/material';

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='neon'>Contact</h2>
      <div className='contact--details'>

        <Link
        className='contact--email'
        href='https://www.linkedin.com/in/pkommidi/'
        target="_blank"
        rel="noopener"
        >
          <FaLinkedin className='contact--svg'/>
        </Link>

        <Link className='contact--email' href='mailto:pkommidi@outlook.com'>
          <FiMail className='contact--svg'/>
          <p>pkommidi@outlook.com</p>
        </Link>
        
      </div>
    </div>
  )
}

export default Contact;