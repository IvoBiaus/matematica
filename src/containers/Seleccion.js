import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Matematica from '../images/matematica.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FooterImg from '../images/cat-looking.gif';


// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.h2,
    alignSelf: 'center',
    margin: "4px 0",
    paddingLeft: '55px',
  },
  panel: {
    backgroundColor: 'rgb(49, 185, 132)',
  },
  content: {
    backgroundColor: '#FFC226',
  },
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
}));


export default function Seleccion(props) {
  
    const classes = useStyles();
    
    return (
      <div>
      <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
            <div>
              <h1 className='titleCenter'>Elegí que vas a pracitar hoy</h1>
              <h2>Tenés 3 niveles por cada problema</h2>
            </div>
            <Grid item xs>
                <img src={Matematica} className="App-logo" alt="matematica" />
            </Grid>
            <Grid item xs>
                <Typography>
                    <Link to={{ pathname: '/matematicas', state: { ej: 'Tablas'} }}>
                      <Button  className={classes.boton} variant="contained">Tablas</Button>
                    </Link>
                    <Link to={{ pathname: '/matematicas', state: { ej: 'Billetes'} }}>
                      <Button  className={classes.boton} variant="contained">Billetes</Button>
                    </Link>
                    <Link to={{ pathname: '/matematicas', state: { ej: 'Sumas'} }}>
                      <Button  className={classes.boton} variant="contained">Sumas</Button>
                    </Link>
                </Typography>
              </Grid>
        </Grid>
        <Grid item xs={3} className={classes.contenedroImg}>
           <img className={classes.imgFotter} src={FooterImg} alt="" />
        </Grid>
      </div>
    );
}
