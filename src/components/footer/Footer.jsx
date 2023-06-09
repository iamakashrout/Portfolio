import React from 'react'
import './footer.css'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AKASH ROUT
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://leetcode.com/iamakashrout" target="_blank">
          <SiLeetcode />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/iamakashrout"
          target="_blank"
        >
          <SiGeeksforgeeks />
        </a>
        <a href="https://www.codechef.com/users/akash_rout" target="_blank">
          <SiCodechef />
        </a>
      </div>
      <div className='footer_copyright'>
        <small>
          &copy; Akash Rout: All rights reserved.
          </small>
      </div>
    </footer>
  );
}

export default Footer