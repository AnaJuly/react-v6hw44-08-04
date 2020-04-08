
import React from 'react'
class Computador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {memoria: "16g",  processador: "intel" , hd:"120g" };

  }
  render() {
    
     return <div>
     <h1> Exemplo com State - Computador</h1>
     <h3>Memória: {this.state.memoria}</h3>
    <h3>processador: {this.state.processador}</h3>
    <h3>hd: {this.state.hd}</h3>
    <h1> Exemplo com Props  - Computador </h1>
    <h3>Memória: {this.props.memoria}</h3>
    <h3>processador: {this.props.processador}</h3>
    <h3>hd: {this.props.hd}</h3>
    </div>
  }
}
 export default Computador;



