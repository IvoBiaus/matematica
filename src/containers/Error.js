import React from 'react';
import ErrorImg from '../images/Error.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlignLast: 'center',
    },
    botonError: {
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
  }));

function Error(props) {
    const classes = useStyles();
    return (
        
        <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
            <div>
                <div className={classes.root}>
                    <img src={ErrorImg} alt="error" />
                    <h1 className='titleCenter'>Hubo un error de comunicación con el servidor</h1>
                    <h2>Intenta nuevamente!!</h2>
                    <Button className={classes.botonError} variant="contained" component={Link} to={'/'}>Salir</Button>
                    {/* <Button variant="contained" onClick={() => props.history.go(-2)}> Volver </Button> */}
                </div>
            </div>
        </Grid>
    );
}

export default Error;