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
              Modern architecture has had a profound impact on the way we live,
              work, and interact with our surroundings. Its legacy continues to
              inspire contemporary architects and designers, who draw upon its
              principles of functionality, minimalism, and connection to nature
              to create innovative and sustainable spaces for the future.
            </small>
            <br />
            <a href="#about" className="btn btn-secondary">
              ABOUT ME
            </a>
          </div>
        </div>

        <div className="card__interest2">
          <div className="interest__detail2">
            <small>
              Modern design architecture has left an indelible mark on the
              world, shaping our cities, homes, and workplaces with its emphasis
              on functionality, clean lines, and a deep respect for the natural
              world. The legacy of modern design architects continues to inspire
              contemporary architects and designers, guiding them towards
              creating sustainable, functional, and aesthetically pleasing
              spaces that enhance our lives in countless ways.
            </small>
            <br />
            <a href="#portfolio" className="btn btn-primary">
              PROJECTS
            </a>
          </div>
          <img src={img__design2} alt="" className="img__interest2" />
        </div>
      </div>
    </>
  );
};

export default Interest;
