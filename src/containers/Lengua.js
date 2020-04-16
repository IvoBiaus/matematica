import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;

const useStyles = theme => ({
  root: { 
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
});



class Lengua extends Component {

  state = {
    nivel: 1,
    data: [],
    current: {}
  };

  render() {
    const { classes } = this.props;
    return (
      <div className='column'>
        <h1 className='titleCenter'>Hola {this.props.name}</h1>
        <h2 className='titleCenter'>{this.props.location.state.ej}</h2>
        <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>
        <form className={classes.root}>
          <TextField  id="standard" label="Hola"  />
          <TextField  id="standard" label="Envío"  />
        </form>
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Volver</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Lengua);