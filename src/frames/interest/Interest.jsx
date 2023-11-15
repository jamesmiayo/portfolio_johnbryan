import React from 'react';
import './interest.css';
import img__design1 from '../../images/img1.jpg';
import img__design2 from '../../images/img2.jpg';

const Interest = () => {
  return (
    <>
      <div className="container container__interest">
        <h2>Interest</h2>
        <div className="card__interest1">
          <img src={img__design1} alt="" className="img__interest1" />
          <div className="interest__detail1">
            <h3>Modern design</h3>
            <small>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting 300+ character lang
            </small>
            <a href="#projects" className="btn btn-secondary">
              PROJECTS
            </a>
          </div>
        </div>

        <div className="card__interest2">
          <div className="interest__detail2">
            <h3>Modern design</h3>
            <small>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting 300+ character lang
            </small>
            <a href="#works" className="btn btn-primary">
              WORKS
            </a>
          </div>
          <img src={img__design2} alt="" className="img__interest2" />
        </div>
      </div>
    </>
  );
};

export default Interest;
