import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center' >
      <img src={images.E} alt="Delish" style={{ opacity: 0.5 }}/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_apoon" className='spoon__img' />
        <p className='p__opensans'>Exquisite Restaurant offers a symphony of refined flavors and impeccable service, where every dish is a masterpiece crafted with precision and passion, promising an unforgettable culinary journey for the discerning palate.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_apoon" className='spoon__img' />
        <p className='p__opensans'>With roots deeply embedded in a tradition of culinary excellence, Exquisite Restaurant has evolved into a beacon of gastronomic sophistication, weaving together a rich tapestry of heritage and innovation to create an unparalleled dining experience.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
