import React, { useRef } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPersonFillGear } from 'react-icons/bs';
import { GiClockwork } from 'react-icons/gi';
import { MdMarkEmailUnread } from 'react-icons/md';

import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';
import { SiProtractor } from 'react-icons/si';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <>
      <section id="navbar">
        <div className="container navbar__container">
          <div className="topnav-right">
            <nav ref={navRef}>
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
                  href="#portfolio"
                  onClick={() => setActiveNav('#portfolio')}
                  className={activeNav === '#portfolio' ? 'active' : ''}
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
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <MdArchitecture size={30} />
              </button>
            </nav>
          </div>
          <button className="nav-btn nav-open-btn" onClick={showNavbar}>
            <SiProtractor size={30} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Nav;
