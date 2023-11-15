import React from 'react';
import './logo.css';

import logo_autocad from '../../images/logo_autocad.png';
import logo_revit from '../../images/logo_revit.png';
import logo_sketchup from '../../images/logo_sketchup.png';

const Logo = () => {
  return (
    <div section="#logo" className="container container__logo">
      <div className="card__logo">
        <img src={logo_autocad} alt="logo_autocad" className="img__logo" />
        <img src={logo_sketchup} alt="logo_sketchup" className="img__logo" />
        <img src={logo_revit} alt="logo_revit" className="img__logo" />
      </div>
    </div>
  );
};

export default Logo;
