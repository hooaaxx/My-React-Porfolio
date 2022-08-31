import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Michel Jou</a>
      <ul className="permalinks">
        <li><a href='/#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/hoax/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/hooaaxx' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://web.facebook.com/H0aaxx' target="_blank" rel="noreferrer"><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hoax. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer