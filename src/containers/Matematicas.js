import React, { Component } from 'react';
import Tablas from '../components/Ejercicios/Tablas/Tablas';
import Sumas from '../components/Ejercicios/Sumas/Sumas';
import Billetes from '../components/Ejercicios/ByM/BienvenidoByM';
import Grid from '@material-ui/core/Grid';



// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;



class Matematicas extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
    }
  }

  render() {
    
    let ejercicio;
    if (this.props.location.state.ej === "Tablas") {
      ejercicio = <Tablas history={this.props.history} name={this.props.name}></Tablas>;
    }
    if (this.props.location.state.ej === "Sumas") {
      ejercicio = <Sumas history={this.props.history} name={this.props.name}></Sumas>;
    }
    if (this.props.location.state.ej === "Billetes") {
      ejercicio = <Billetes history={this.props.history} name={this.props.name}></Billetes>;
    }
    return (
      <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
          <Grid item xs={12} md={6}>
            {ejercicio}
          </Grid>
     </Grid>
    );
  }
}

export default Matematicas;