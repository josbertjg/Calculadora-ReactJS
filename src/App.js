//NOTA: TERMINAR EL MTODO SUPRIMIR Y DAR ESTILOS AL H1 AL ANCLA Y A LOS BOTONES, TAMBIEN FALTA SUBIRLO A GITHUB PAGES
//FALTA TAMBIEN LA VERSION RESPONSIVE Y EFECTO HOVER DE LOS BOTONES

import './styles/App.scss';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonExtra from './components/BotonExtra';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  let [input,setInput] = useState('');

  //AÑADIENDO UN DIGITO A LA PANTALLA
  const addInput = (value)=>{
    if(input=='SintaxError!'){
      setInput(input='');
      setInput(input+value);
    }else
      setInput(input+value)
  };

  //EVALUANDO Y MOSTRANDO EL RESULTADO
  const result = ()=>{
    if(input)
      if(input=='0/0')
        setInput(input='SintaxError!');
      else
        try{
          setInput(evaluate(input));
        }catch(e){
          setInput(input='SintaxError!');
        }
  };

  //BORRANDO UN SOLO DIGITO DE LA PANTALLA
  const suprimir = ()=>{
    if(input){
      if(isNaN(input)||input==Infinity)
        setInput(input='');
      else
        if(input.toString().length>1){
          let aux=Array.from(input.toString());
          aux.pop();
          aux=aux.join('')
          setInput(input=aux);
        }else
          setInput(input='');
    }
  };

  //RETORNANDO EL COMPONENTE
  return (
    <div className="App">
      <h1>Desarrollado en ReactJS por <a href='https://josbertjg.github.io/' target='_blank'>Josbert Guedez</a></h1>
      <div className='container-calculadora'>
        <Pantalla input={input}/>
        <section className='fila'>
          <Boton handleClick={addInput}>1</Boton>
          <Boton handleClick={addInput}>2</Boton>
          <Boton handleClick={addInput}>3</Boton>
          <Boton handleClick={addInput}>+</Boton>
        </section>
        <section className='fila'>
          <Boton handleClick={addInput}>4</Boton>
          <Boton handleClick={addInput}>5</Boton>
          <Boton handleClick={addInput}>6</Boton>
          <Boton handleClick={addInput}>-</Boton>
        </section>
        <section className='fila'>
          <Boton handleClick={addInput}>7</Boton>
          <Boton handleClick={addInput}>8</Boton>
          <Boton handleClick={addInput}>9</Boton>
          <Boton handleClick={addInput}>*</Boton>
        </section>
        <section className='fila'>
          <Boton handleClick={result}>=</Boton>
          <Boton handleClick={addInput}>0</Boton>
          <Boton handleClick={addInput}>.</Boton>
          <Boton handleClick={addInput}>/</Boton>
        </section>
        <section className='d-flex'>
          <BotonExtra handleClick={()=>setInput('')}>blank</BotonExtra>
          <BotonExtra handleClick={suprimir}>delete</BotonExtra>
        </section>
      </div>
    </div>
  );
};

export default App;
