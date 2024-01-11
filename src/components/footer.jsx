import React from 'react';
import '../styles/index.css';

import Content from '../img/cont-footer.png';

const Footer = () => {
  return (
    <section className='footer'>
        <center>
            <img src={Content} alt="" />
        </center>
    </section>
  );
};

export default Footer;