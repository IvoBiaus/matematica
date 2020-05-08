import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './App.css';

/*Imagenes de Monedas  */
import unpeso from './images/billetesymonedas/monedas/unpeso.png';
import dospesos from './images/billetesymonedas/monedas/dospesos.png';
import cincopesos from './images/billetesymonedas/monedas/cincopesos.png';
/* Imagenes de Billetes  */
import diezpesos from './images/billetesymonedas/billetes/diezpesos.png';
import veintepesos from './images/billetesymonedas/billetes/veintepesos.png';
import cincuentapesos from './images/billetesymonedas/billetes/cincuentapesos.png';
import cienpesos from './images/billetesymonedas/billetes/cienpesos.png';
import doscientospesos from './images/billetesymonedas/billetes/cienpesos.png';
import quinientospesos from './images/billetesymonedas/billetes/quinientospesos.png';
import milpesos from './images/billetesymonedas/billetes/milpesos.png';

/* Funcion principal  */
export default function StickyFooter(props) {

   /* Constantes  */
  const classes = useStyles();
  const imageCollection = [ diezpesos, veintepesos, cincuentapesos, cienpesos, doscientospesos, quinientospesos, milpesos];
  const getRandomImage = () => imageCollection[Math.floor(Math.random() * imageCollection.length)];
  const imageCollectionMonedas = [ unpeso,dospesos,cincopesos];
  const getRandomImageMonedas = () => imageCollectionMonedas[Math.floor(Math.random() * imageCollectionMonedas.length)];

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">

        {/* Comienzo  */}
        <Typography variant="h4" component="h4" gutterBottom>
        Billetes y Monedas
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
        ¿Cuánto dinero tengo ?
        </Typography>

        {/* Cantidad Cuadro de texto  */}
        <TextField id="outlined-basic" label="$" variant="outlined" />

        {/* Boton Enviar  */}
        <div>
        <p></p>
        <Button variant="contained" size="small" color="primary" className={classes.margin} >
        Enviar
        </Button>
        </div>

        </Container>

        {/* Fotos random de billetes y monedas  */}
        <Container maxWidth="sm">
        <div className="App">
        <header className="App-header">
        <img src={getRandomImage()}  alt="billete"/>
        <h5>+</h5>
        <img src={getRandomImage()}  alt="billete"/>
        <h5>+</h5>
        <img src={getRandomImageMonedas()} className="App-logo" alt="logo" />
        </header>
        </div>

        {/* Boton volver a niveles  */}
        <Button className={classes.boton} variant="contained" onClick={() => props.history.go(-1)}>Volver a Niveles</Button>
        </Container>
    
    </div>
  );
}

// Estilos  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#FFC226',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  footer: {
    padding: theme.spacing(4, 4),
    marginTop: 'left',
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
}));
