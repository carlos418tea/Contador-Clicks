import logoMorado from './imagenes/imagen-logo.png';
import './App.css';
import Boton from './componentes/Boton';
import './hojas de estilos/Boton.css';
import Contador from './componentes/contador';
import './hojas de estilos/Contador.css'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logoMorado'
          src={logoMorado}
          alt="logo de carlos"
        />

      </div>

      <div className='contenedor-principal'>
        {/* Contador de botones */}
        <Contador 
          numClics = { numClics }/>

        {/* Boton de sumar +1 */}
        <Boton 
          texto='click'
          esBotonDeClic={true}
          manejarClic= { manejarClic }/>
        {/* Boton de reinicio */}
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic= { reiniciarContador }/>
      </div>

    </div>
  );
}

export default App;
