import React from 'react';
import Banner from '../banner/Banner';
import Faq from '../Faq/Faq';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
  return (
    <div className='container'>
    <Banner></Banner>
    <HomeServices></HomeServices>
    <Faq></Faq>
    </div>
  );
};

export default Home;