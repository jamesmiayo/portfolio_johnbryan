import React from 'react';
import './interest.css';
import img__design1 from '../../images/img1.jpg';

const Interest = () => {
  return (
    <>
      <div className="container container__interest">
        <h2>Interest</h2>
        <div className="card__interest">
          <img src={img__design1} alt="" />
          <h3>Modern design</h3>
          <small>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </small>
          <a href="#contact" className="btn btn-secondary">
            PROJECTS
          </a>
        </div>
      </div>
    </>
  );
};

export default Interest;
