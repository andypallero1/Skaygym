import React, { useState } from 'react';
import '../styles/index.css';

import Titulo from '../img/title.png';
import Icono from '../img/checklist.png';
import Open from '../img/open.png';
import Opened from '../img/opened.png'; // Nueva imagen abierta

const Clients = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleBoxClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const boxData = [
    {
      title: 'PROFESIONALES OCUPADOS',
      text: 'Personas con agendas apretadas que buscan flexibilidad para hacer ejercicio en cualquier momento y lugar.',
    },
    {
        title: 'FITNESS EN CASA',
        text: 'Individuos que prefieren entrenar en la comodidad de su hogar en lugar de ir a un gimnasio.',
      },
      {
        title: 'VIAJEROS FRECUENTES',
        text: 'Aquellos que están constantemente en movimiento y desean mantenerse en forma mientras viajan.',
      },
      {
        title: 'MAMAS OCUPADAS',
        text: 'Madres que buscan soluciones convenientes para hacer ejercicio en casa mientras cuidan de sus hijos.',
    },
      {
        title: 'TRABAJADORES REMOTOS',
        text: 'Profesionales que trabajan desde casa y desean incorporar fácilmente sesiones de entrenamiento.',
      },
      {
        title: 'ENTUSIASTAS DEL AIRE LIBRE',
        text: 'Personas que disfrutan del aire libre y desean combinar entrenamientos virtuales con su amor por la naturaleza.',
      },
      {
        title: 'PERSONAS MAYORES',
        text: 'Mayores que buscan programas de ejercicio adaptados a sus necesidades y preferencias desde su hogar.',
      },
      {
        title: 'DEPORTISTAS AMATEUR',
        text: 'Aquellos que desean complementar su entrenamiento con sesiones virtuales específicas.',
      },
      {
        title: 'PERSONAS INTROVERTIDAS',
        text: 'Individuos que prefieren evitar entornos sociales, optando por entrenamientos más privados en casa.',
      },
      {
        title: 'AMANTES DE LA COMUNIDAD',
        text: 'Personas que buscan ser parte de nuestra hermosa Comunidad Skaygym pero se encuentran a cientos de kilómetros de distancia: no se preocupen, acá llegó la solución perfecta.',
      },
                  
    
  ];

  const firstFiveBoxes = boxData.slice(0, 5);
  const lastFiveBoxes = boxData.slice(-5);

  return (
    <section className='clients'>
        
      <center><div className='box-img'>
        <img className='paraquien' src={Titulo} alt="" />
      </div></center>
      <div className='container'>
        <div className='box-section'>
          {firstFiveBoxes.map((box, index) => (
            <div className='box-mayor' key={index}>
              <div className='box'>
                <img className='icon' src={Icono} alt="" />
                <h1 className='title-clients'><i>{box.title}</i></h1>
                <img
                  className='open'
                  onClick={() => handleBoxClick(index)}
                  src={index === openIndex ? Opened : Open}
                  alt=""
                />
              </div>
              {index === openIndex && (
                <p className='text-clients'>{box.text}</p>
              )}
              <div className='line'></div>
            </div>
          ))}
        </div>
        <div className='box-section'>
          {lastFiveBoxes.map((box, index) => (
            <div className='box-mayor' key={index + firstFiveBoxes.length}>
              <div className='box'>
                <img className='icon' src={Icono} alt="" />
                <h1 className='title-clients'><i>{box.title}</i></h1>
                <img
                  className='open'
                  onClick={() => handleBoxClick(index + firstFiveBoxes.length)}
                  src={index + firstFiveBoxes.length === openIndex ? Opened : Open}
                  alt=""
                />
              </div>
              {index + firstFiveBoxes.length === openIndex && (
                <p className='text-clients'>{box.text}</p>
              )}
              <div className='line'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;