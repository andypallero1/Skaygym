import React from 'react';
import '../styles/index.css';

import ImagenPrincipal from '../img/img-base.jpg';
import IconoIG from '../img/ig.png';
import IconoCELL from '../img/cell.png';
import IconoWEB from '../img/web.png';

const Home = () => {
  return (
    <div>
      <img className='img-base' src={ImagenPrincipal} alt="Imagen Principal" />

      <div className="icono-container">
        <div>
            <p className='seguinos'>Seguinos en nuestras redes</p>
        </div>
        <div className='icono'>
        <a href="https://www.instagram.com/skaygym" target='blank'><img src={IconoIG} alt="Instagram" /></a>
        <p className='caract'>@SKAYGYM</p>
        </div>
        <div className='icono'>
        <a href="https://api.whatsapp.com/send?phone=2216554482&text=¡Hola! Me gustaría recibir más información sobre Skay Gym" target='blank'><img src={IconoCELL} alt="Teléfono" /></a>
        <p className='caract'>2216554482</p>
        </div>
        {/* <div className='icono'>
        <a href="" target='blank'><img src={IconoWEB} alt="Web" /></a>
        <p className='caract'>SKAYGYM.COM</p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
