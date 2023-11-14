import React from 'react';
import './banner.css';
import banner from '../../images/arch.jpg';

const Banner = () => {
  return (
    <div className="container container__banner">
      <img src={banner} alt="banner" className="img__banner" />
    </div>
  );
};

export default Banner;
