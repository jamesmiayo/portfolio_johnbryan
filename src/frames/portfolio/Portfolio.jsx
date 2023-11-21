import React from 'react';
import './portfolio.css';
import img_portf1 from '../../images/img1.jpg';
import img_portf2 from '../../images/img2.jpg';
import img_portf3 from '../../images/img3.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <div className="card__portfolio">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={img_portf1}
                alt="img_portf1"
                className="img__portfolio"
              />
              <h2>Project 1</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img_portf2}
                alt="img_portf2"
                className="img__portfolio"
              />
              <h2>Project 2</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img_portf3}
                alt="img_portf3"
                className="img__portfolio"
              />
              <h2>Project 3</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
