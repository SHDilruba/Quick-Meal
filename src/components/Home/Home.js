import React from 'react';
import Banner from '../banner/Banner';
import Benefits from '../Benefits/Benefits';
import Faq from '../Faq/Faq';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
  return (
    <div className='container'>
    <Banner></Banner>
    <HomeServices></HomeServices>
    <Benefits></Benefits>
    <Faq></Faq>
    </div>
  );
};

export default Home;