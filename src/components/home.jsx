import React, { useState, useEffect } from 'react';
import '../styles/index.css';
import { Link } from 'react-scroll';

import Logo from '../img/logo.png';
import Boton from '../img/boton.png';
import Content from '../img/entrenamiento.png';
import ContentMobile from '../img/home-mobile.png';

const Home = () => {
  const [contentImage, setContentImage] = useState(Content);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setContentImage(ContentMobile);
      } else {
        setContentImage(Content);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='home'>
      <center><div className='logo'>
        <img src={Logo} alt="logo" />
      </div>
      <center><img className='content-home' src={contentImage} alt="" /></center>
      <div className='boton'>
        <Link to="planes" smooth={true} duration={500}>
          <img className='boton-home' src={Boton} alt="" />
        </Link>
      </div></center>
    </section>
  );
};

export default Home;