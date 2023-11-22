import React from 'react';
import './banner.css';
import banner from '../../images/arch.jpg';

const Banner = () => {
  return (
    <section id="home" className="container container__banner">
      <div className="banner-text">
        <h1>
          Looking for a <br />
          freelance
          <span>
            <h1 className="highlights">
              Architect <span>?</span>
            </h1>
          </span>
        </h1>
      </div>
      <div>
        <div className="banner">
          <div className="container__imgbanner">
            <img src={banner} alt="banner" className="img__banner" />
          </div>
          <a href="#contact" className="btn btn-primary btn__contact">
            CONTACT ME
          </a>

          <a href="#about" className="btn btn-secondary btn__about">
            ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
