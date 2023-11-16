import React from 'react';
import './portfolio.css';
import img_portf1 from '../../images/img3.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <div className="card__portfolio">
          <img src={img_portf1} alt="img_portf1" className="img__portfolio" />
          <div className="portfolio__details">
            <div className="portfolio__info">
              <h6>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to
              </h6>
            </div>
            <div className="info__detail">
              <small className="text-detail">
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
