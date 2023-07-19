import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/akash-rout-82a38622a"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/iamakashrout"
        rel="noreferrer"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/iamakashrout"
        rel="noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a
        href="https://www.youtube.com/@iamakashrout"
        rel="noreferrer"
        target="_blank"
      >
        <BsYoutube />
      </a>
    </div>
  );
}

export default HeaderSocials