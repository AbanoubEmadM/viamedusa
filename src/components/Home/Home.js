import React, { memo, useEffect } from 'react';
import Categories from '../Categories/Categories.js'
import PopularProducts from '../../containers/Popular Products/PopularProducts';
import About from '../About/About';
import Discount from '../Discount/Discount';
import Lineup from '../Lineup/Lineup';
import HomeSection from '../HomeSection/HomeSection.js';

const Home = () => {
  return (
    <>
      <HomeSection />
      <Categories />
      <PopularProducts />
      <About />
      <Discount />
      <Lineup />
    </>
  )
}

export default memo(Home)