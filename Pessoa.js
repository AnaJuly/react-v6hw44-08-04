//Ana Júlia Giacomeli

import React from 'react';

function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}

class Pessoa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sobrenome: '',
      age: null,
      erromensage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';

    if(nam === "age"){
      if(val !=""&&!Number(val)){
        err = <strong> Your age must be a number </strong>;
      }
    }

    if (nam === "name"){
      if(val != val.toUpperCase()){
          val = val.toUpperCase();
      }
    }

    if (nam ==="sobrenome"){
      val = capitalize(val);
    }
   
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Formulário Pessoa</h1>
      <h2>Nome completo: {this.state.name} {this.state.sobrenome}</h2>
      <h2>Idade: {this.state.age}</h2>
      
      <p>Nome:</p>
      <input
        type='text'
        name='name'
        onChange={this.myChangeHandler}
      />
      <p>Sobrenome:</p>
      <input
        type='text'
        name='sobrenome'
        onChange={this.myChangeHandler}
      />
        <p>Idade:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}

export default Pessoa;