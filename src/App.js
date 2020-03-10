import React from 'react';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location'
import Footer from './components/header_footer/Footer';

import './resources/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="Featured">
        <Featured />
      </Element>
      <Element name="VenueNFO">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="Pricing">
        <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
