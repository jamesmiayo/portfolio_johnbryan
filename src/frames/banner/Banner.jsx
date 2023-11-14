import React from 'react';
import './banner.css';
import banner from '../../images/arch.jpg';

const Banner = () => {
  return (
    <div className="container container__banner">
      <div className="container__imgbanner">
        <img src={banner} alt="banner" className="img__banner" />
      </div>
      <a href="#contact" className="btn btn-primary btn__contact">
        CONTACT ME
      </a>
      <a href="#contact" className="btn btn-secondary btn__about">
        Message me
      </a>
    </div>
  );
};

export default Banner;
