
import React, { Component } from 'react';
import { render } from 'react-dom';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errormessage: '',
      num1: null,
      num2: null,
      soma: null,
    };
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let erro = '';

    if (nam == "num1"){
      this.num1 = parseInt(event.target.value);
    }
    if (nam == "num2"){
      this.num2 = parseInt(event.target.value);
    }

    if (nam === "num1" || nam ==="num2") {
      if (!Number(val)) {
        erro = <strong>Você deve digitar apenas números</strong>;
      }
    }
    let soma = this.num1 + this.num2;
    this.setState({soma: soma})
    this.setState({errormessage: erro});
  }
  render() {
    return (
      <form>
      <h1>Calculadora somar:</h1>
      <p>Número 1:</p>
      <input 
        type='text'
        name='num1'
        onChange={this.myChangeHandler}
      />
      
      <p>Número 2:</p>
      <input
        type='text'
        name='num2'
        onChange={this.myChangeHandler}
      />
      <p></p>
     
      <h2>Soma: {this.state.soma}</h2>
       {this.state.errormessage}
      </form>
    );
  }
}

export default Calc;







