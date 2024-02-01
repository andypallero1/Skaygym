import React from 'react';
import '../styles/index.css';

import About from '../img/about.png';
import Linea from '../img/linea.png';


const AboutSection = () => {
  return (
    <section className='about'>
    

    <center>
      <img className='img-about' src={About} alt="funcion" />
      </center>

      <img className='linea-der' src={Linea} alt="" />

    </section>
  );
};

export default AboutSection;