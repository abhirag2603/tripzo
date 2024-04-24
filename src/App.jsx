import React, { useEffect, useRef } from 'react';
import Header from './Components/Header/Header';
import Review from './Components/middle1/Review';
import Destinations from './Components/middle1/Destinations';
import Cards from './Components/middle1/Cards'
import Promo from './Components/middle1/Promo';
import Support from './Components/middle2/Support';
import Support2 from './Components/middle2/Support2';
import Footer from './Components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Review />
      <Destinations />
      <Cards />
      <Promo/>
      <Support/>
      <Support2/>
      <Footer/>
    </>
  );
}

export default App;
