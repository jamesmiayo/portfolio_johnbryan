import React from 'react';
import './about.css';
import img_bryan from '../../images/bryan.png';

const About = () => {
  return (
    <section id="about">
      <div className="container container__about">
        <div className="card__about">
          <div className="card__about-image">
            <img src={img_bryan} alt="img_bryan" className="img__bryan" />
            <div className="card__about-detail">
              <h4>
                Hi i’m <span className="text-architect">Architect</span>
                <br /> John Bryan Miayo
              </h4>
            </div>
          </div>

          <small>
            John is a multi-talented designer who thrives on contemplating and
            solving complex problems simultaneously. His ability to look several
            steps ahead, to efficiently thread the needle in every project, and
            find solutions to complicated code issues is notable. Bryan's
            project leadership fuses savvy design sensibilities and technical
            knowledge with a deep understanding of the entitlement process,
            which results in the effective development, management, and
            realization of hos projects.
          </small>
        </div>
      </div>
    </section>
  );
};

export default About;
