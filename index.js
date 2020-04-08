import React, { Component } from 'react';
import { render } from 'react-dom';
import Computador from './Computador';
import Calc from './Calc';
import Pessoa from './Pessoa';
import './style.css';


function Monitor(props){
  let polegada = "22p";

  return (<div> 
  <h1> Exemplo - Monitor </h1>
  <h3>polegada: {polegada} </h3>
  <h3>cor: {props.cor} </h3>
  <h1> Exemplo com props - Monitor </h1>
  <h3>Tamanho: {props.tamanho} </h3>
  <h3>marca: {props.marca} </h3>
 
   </div> )
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
     memoria: "16g", processador: "intel", hd: "120g", 
     propMarca:""
    };
  }

  mudarMarca = () => {
    this.setState({propMarca:"Intel"});
  }

  render() {
    return (
        
      <div>
      
     <Calc/>
     <Pessoa/>
     
      <Computador memoria = "2gb" processador = "Windows" hd= "3Tb" />


        <Monitor marca ={this.state.propMarca} tamanho="60cm" polegada= "60" cor = "rosa"  />
        
        <button type = "button" onClick = {this.mudarMarca}> MudarMarca </button>
      
       <p>
         Muito trabalhoso esse tema 
      </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
