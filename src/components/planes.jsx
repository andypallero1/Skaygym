import React from 'react';
import '../styles/index.css';

import Linea from '../img/linea2.png';
import Titulo from '../img/planes.png';
import PlanUno from '../img/plan1.png';
import PlanDos from '../img/plan2.png';
import PlanTres from '../img/plan3.png';

const Planes = () => {
const mensajePredeterminado = "Hola! Quiero obtener más información sobre el ";
  return (
    <section className='planes'>
      <img className='linea3' src={Linea} alt="" />
      <center>
        <img src={Titulo} alt="" style={{ width: '40%',marginTop: '50px'}} />
        <div>
            <a href={`https://wa.me/<2216554482>?text=${encodeURIComponent(mensajePredeterminado + 'Plan Inicial')}`}>
            <img src={PlanUno} alt="" style={{ width: '250px', margin: '50px'  }} />
            </a>
            <a href={`https://wa.me/<2216554482>?text=${encodeURIComponent(mensajePredeterminado + 'Plan Avanzado')}`}>
            <img src={PlanDos} alt="" style={{ width: '250px', marginBottom: '-20px' }} />
            </a>
            <a href={`https://wa.me/<2216554482>?text=${encodeURIComponent(mensajePredeterminado + 'Plan Deportista')}`}>
            <img src={PlanTres} alt="" style={{ width: '250px', margin: '50px' }} />
            </a>
        </div>
      </center>
    </section>
  );
};

export default Planes;