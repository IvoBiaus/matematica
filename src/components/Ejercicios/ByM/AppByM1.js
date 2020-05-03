/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import cincopesos from './images/billetesymonedas/monedas/cincopesos.png';
import cienpesos from './images/billetesymonedas/billetes/cienpesos.png';
import cincuentapesos from './images/billetesymonedas/billetes/cincuentapesos.png';
import './App.css';



export default function StickyFooter(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h4" component="h4" gutterBottom>
          Billetes y Monedas
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom>
          {'Cuánto dinero tengo ???'}
        </Typography>
        <TextField id="outlined-basic" label="$" variant="outlined" />
        <div>
          <p></p>
          <Button variant="contained" size="small" color="primary" className={classes.margin}>
            Enviar
        </Button>

        </div>
      </Container>

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <App />
          <Button className={classes.boton} variant="contained" onClick={() => props.history.go(-1)}>Salir</Button>
          <Typography variant="body1">Grupo 5.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

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



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cienpesos} />
        <h5>+</h5>
        <img src={cincuentapesos} />
        <h5>+</h5>
        <img src={cincopesos} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://uade.edu.ar/">
        Uade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

