import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


class Bienvenido extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid  container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '90vh',backgroundColor: '#e6b800' }}>
                    <div className='column'>
                        <h1>Bienvenido {this.props.name} !</h1>
                        <h2 className='titleCenter'>Vamos a hacer unos ejercicios de matematica... Estas listo?</h2>
        
                        <div>
                            <Button type="submit" variant="contained" component={Link} to={'/Seleccion'} onClick={this.props.onClick} >Continuar</Button>
                        </div>
                    </div>
                </Grid>
            </div>   
        );
      }  
}
export default Bienvenido;