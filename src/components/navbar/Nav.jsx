import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPersonFillGear } from 'react-icons/bs';
import { GiClockwork } from 'react-icons/gi';
import { MdMarkEmailUnread } from 'react-icons/md';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav className="container">
      <div className="nav_btn">
        <a
          href="#home"
          onClick={() => setActiveNav('#home')}
          className={activeNav === '#home' ? 'active' : ''}
        >
          <AiOutlineHome className="icons" />
        </a>
        <h3>Home</h3>
      </div>

      <div className="nav_btn">
        <a
          href="#works"
          onClick={() => setActiveNav('#works')}
          className={activeNav === '#works' ? 'active' : ''}
        >
          <GiClockwork className="icons" />
        </a>
        <h3>Works</h3>
      </div>

      <div className="nav_btn">
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <BsPersonFillGear className="icons" />
        </a>
        <h3>About</h3>
      </div>
      <div className="nav_btn">
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <MdMarkEmailUnread className="icons" />
        </a>

        <h3>Contact</h3>
      </div>
    </nav>
  );
};

export default Nav;
