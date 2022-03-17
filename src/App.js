import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';

function App () {
  return (
    <div className="App">
      <>
      <GlobalStyle />
        <Navbar />
        <Hero slides={SliderData}/>
      </>
    </div>
  );
}

export default App;
