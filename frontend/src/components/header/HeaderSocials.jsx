import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/prashant-kumar-461911237/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/prashanttheone" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/prashant_the_one/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials