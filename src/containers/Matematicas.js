import React, { Component } from 'react';
import Tablas from '../components/Ejercicios/Tablas/Tablas';
import Sumas from '../components/Ejercicios/Sumas/Sumas';
import Billetes from '../components/Ejercicios/ByM/BienvenidoByM';
import Grid from '@material-ui/core/Grid';
import FooterImg from '../images/cat-walking.gif';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
  imgFotter: {
    width: '100%',
  },
  contenedroImg: {
    justifyContent: 'flex-end',
    flex: '1 1',
    minWidth: '0',
    minHeight: '0',
    display: 'flex',
    flexDirection: 'column',
  },
});


class Matematicas extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;
    let ejercicio;
    if (this.props.location.state.ej === "Tablas") {
      ejercicio = <Tablas history={this.props.history} name={this.props.name} token={this.props.token}></Tablas>;
    }
    if (this.props.location.state.ej === "Sumas") {
      ejercicio = <Sumas history={this.props.history} name={this.props.name} token={this.props.token}></Sumas>;
    }
    if (this.props.location.state.ej === "Billetes") {
      ejercicio = <Billetes history={this.props.history} name={this.props.name} token={this.props.token}></Billetes>;
    }
    return (
      <Grid container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh' }}>
        <Grid item md={6} className={classes.contenedroImg}>
          <img className={classes.imgFotter} src={FooterImg} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          {ejercicio}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(Matematicas);