import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/hoax/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/hooaaxx' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://web.facebook.com/H0aaxx' target="_blank" rel="noreferrer"><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials