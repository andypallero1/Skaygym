import React from 'react';
import '../styles/index.css';
import { Link } from 'react-scroll';

import Linea from '../img/linea.png';
import Linea2 from '../img/linea2.png';
import Funcion from '../img/img1.png';
import Contenido from '../img/img2.png';
import Comencemos from '../img/comencemos.png';

const Function = () => {
  return (
    <section className='function'>
      <div className='contenedor-function'><img className='linea' src={Linea} alt="linea" />
      <img className='funcion' src={Funcion} alt="funcion" />
      <center>
        <center><img className='contenido' src={Contenido} alt="contenidos" /></center>
        <Link to="planes" smooth={true} duration={500}>
          <img className='comencemos' src={Comencemos} alt="comencemos" />
        </Link>
      </center>
      </div>
      <img className='linea-funcion' src={Linea2} alt="" />

    </section>
  );
};

export default Function;