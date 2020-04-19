import React, { Component } from 'react';
import Tablas from '../components/Ejercicios/Tablas';
import Sumas from '../components/Ejercicios/Sumas';
import Billetes from '../components/Ejercicios/Billetes';


// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;



class Matematicas extends Component {

  state = {
    
  };

  render() {
    // console.log(this.props.name);
    console.log(this.props.location.state.ej);
    let ejercicio;
    if (this.props.location.state.ej === "Tablas") {
      ejercicio = <Tablas name={this.props.name}></Tablas>;
    }
    if (this.props.location.state.ej === "Sumas") {
      ejercicio = <Sumas></Sumas>;
    }
    if (this.props.location.state.ej === "Billetes") {
      ejercicio = <Billetes></Billetes>;
    }
    return (
     ejercicio
    );
  }
}

export default Matematicas;