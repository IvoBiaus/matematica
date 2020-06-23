import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withStyles  } from '@material-ui/core/styles';

// Estilos
const useStyles = {
    boton: {
      marginRight: 16,
      marginTop: 5,
      backgroundColor: '#FFFFFF',
      color: '#000000',
      borderRadius: '200px',
      display: 'inline-block',
      fontSize: '15px',
      height: '40px',
      width: '200px',
      border: '0',
      textAlign: 'center',
      transition: 'all 290ms cubic-bezier(0.79, 0.01, 0.38, 0.99)',
    },
  };


class Bienvenido extends Component {
    render() {
        const { classes } = this.props;
        return (
              <div>
                <Grid container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '20vh' }}
                    >
                    <div className='column'>
                        <h1>{localStorage.getItem("nombre")} seleccioná el nivel a Jugar !</h1>
                        <div>
                        {/* Botones seleccion  */}
                            <h2> Fácil</h2>
                            <Button className={classes.boton} type="submit" variant="contained" component={Link} to={'/AppByM1'} onClick={this.props.onClick} >Nivel 1</Button>
                            <h2> Normal</h2>
                            <Button className={classes.boton} type="submit" variant="contained" component={Link} to={'/AppByM2'} onClick={this.props.onClick} >Nivel 2</Button>
                            <h2> Difícil</h2>
                            <Button className={classes.boton} type="submit" variant="contained" component={Link} to={'/AppByM3'} onClick={this.props.onClick} >Nivel 3</Button>
                        </div>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default withStyles(useStyles)(Bienvenido);


