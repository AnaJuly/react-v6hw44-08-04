import React from 'react'

function Monitor() {
  let polegada = "22p";
}

function Monitor extends React.Component {
  constructor() {
    super();
    this.state = {polegada: "22p", cor:"rosa"};
  }
  render() {
    return 
    <h1> Exemplo com state </h1>
    <h2>{this.state.polegada}</h2>
    <h2> {this.state.cor}</h2>
    <h1> Exemplo com props </h1>
    <h2>{this.props.polegada}</h2>
    <h2> {this.props.marca}</h2>
  }
}
export default Monitor;