import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Explore fresh flavors"/> 
      <h1 className='app__header-h1'>The secret to exquisite dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}> Indulge in an unforgettable culinary experience at Exqusite Restaurant, where every dish is crafted with passion and expertise to tantalize your taste buds and leave you craving more.</p>
      <button type='button' className='custom__button'>Dive In</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='Main Image'/>
    </div>
  </div>
);

export default Header;
