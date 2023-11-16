import React from 'react';
import './about.css';
import img_bryan from '../../images/bryan.png';

const About = () => {
  return (
    <section id="about">
      <div className="container container__about">
        <div className="card__about">
          <img src={img_bryan} alt="img_bryan" className="img__bryan" />
          <div className="card__about-detail">
            <h4>
              Hi i’m <span className="text-architect">Architect</span>
              <br /> John Bryan Miayo
            </h4>
            <small>
              John is a multi-talented designer who thrives on contemplating and
              solving complex problems simultaneously. Her ability to look
              several steps ahead, to efficiently thread the needle in every
              project, and find solutions to complicated code issues is notable.
              Carey's project leadership fuses savvy design sensibilities and
              technical knowledge with a deep understanding of the entitlement
              process, which results in the effective development, management,
              and realization of her projects. In spring 2022, Carey will be
              co-instructing a graduate thesis research studio at the College of
              Built Environments at the University of Washington, which will
              focus on envisioning futures in a post-anthropocentric world. In
              her spare time, Carey enjoys spending time in the mountains and
              the water with friends and family.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
