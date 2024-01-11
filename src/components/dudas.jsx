import React from 'react';
import '../styles/index.css';

import Titulo from '../img/dudas.png';
import Instagram from '../img/ig-skay.png';
import Terminos from '../img/terminos.png';

const Dudas = () => {
  return (
    <section className='dudas'>
        <center>
        <img className='dudas-preg' src={Titulo} alt="" />
        <div className='dudas-redes'>
        <a href="https://www.instagram.com/skaygym/" target='_blank'><img src={Instagram} alt="" /></a>
        <a href=""><img src={Terminos} alt="" /></a>
        </div>
        </center>
    </section>
  );
};

export default Dudas;