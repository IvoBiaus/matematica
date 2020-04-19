import React from 'react';
import ErrorImg from '../images/Error.jpg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Error(props) {
    return (
        <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
            <div>
                <img src={ErrorImg} alt="error" />
                <h1>Hubo un error de comunicación con el servidor, intenta nuevamente</h1>
                <Button variant="contained" component={Link} to={'/'}>Volver</Button>
            </div>
        </Grid>
    );
}

export default Error;