import React from 'react';
import '../styles/index.css';

import About from '../img/about.png';

const AboutSection = () => {
  return (
    <section className='about'>

     <center>
      <img className='img-about' src={About} alt="funcion" />
      </center>

    </section>
  );
};

export default AboutSection;