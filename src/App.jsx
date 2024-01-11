import React from 'react';
import Home from './components/home';
import Clients from './components/clients';
import Function from './components/function';
import About from './components/about';
import Socios from './components/socios';
import Planes from './components/planes';
import Dudas from './components/dudas';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Clients/>
      <Function/>
      <About/>
      <Socios/>
      <Planes/>
      <Dudas/>
      <Footer/>
    </div>
  );
}

export default App;


