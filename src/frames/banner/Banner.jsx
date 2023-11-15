import React from 'react';
import './banner.css';
import banner from '../../images/arch.jpg';

const Banner = () => {
  return (
    <section id="#banner" className="container container__banner">
      <div>
        <h1>
          Looking for an1
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

          <a href="#contact" className="btn btn-secondary btn__about">
            ABOUT ME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
