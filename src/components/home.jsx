import React from 'react';
import '../styles/index.css';
import { Link } from 'react-scroll';

import Logo from '../img/logo.png';
import Boton from '../img/boton.png';
import Content from '../img/entrenamiento.png';

const Home = () => {
  return (
    <section className='home'>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>
      <center><img className='content-home' src={Content} alt="" /></center>
      <div className='boton'>
        <Link to="planes" smooth={true} duration={500}>
          <img src={Boton} alt="" style={{ width: '80%' }}/>
        </Link>
      </div>
    </section>
  );
};

export default Home;
