import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdDesignServices } from 'react-icons/md';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <div className="nav_btn">
        <a
          href="#profile"
          onClick={() => setActiveNav('#profile')}
          className={activeNav === '#profile' ? 'active' : ''}
        >
          <AiOutlineHome className="icons" />
        </a>
        <h3>Home</h3>
      </div>

      <div className="nav_btn">
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser className="icons" />
        </a>
        <h3>Works</h3>
      </div>

      <div className="nav_btn">
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook className="icons" />
        </a>
        <h3>About</h3>
      </div>
      <div className="nav_btn">
        <a
          href="#services"
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <MdDesignServices className="icons" />
        </a>

        <h3>Contact</h3>
      </div>
    </nav>
  );
};

export default Nav;
