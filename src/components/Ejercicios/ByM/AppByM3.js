/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import diezpesos from './images/billetesymonedas/billetes/diezpesos.png';
import quinientospesos from './images/billetesymonedas/billetes/quinientospesos.png';
import kiosco from './images/billetesymonedas/m/kiosco.png';
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
          {'Si quiero comprar 5 golosinas distintas, ¿Me alcanza con éste dinero?'}
        </Typography>
        <div>
        <ErrorRadios/>
        <p></p>
       
      </div>
      </Container>
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <App />
        <p></p>
        <Button className={classes.boton} variant="contained" onClick={() => props.history.go(-1)}>Volver a Niveles</Button>
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
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
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
        <img src={quinientospesos}/>
        <h5>+</h5>
        <img src={diezpesos}/>
        <p></p>
        <img src={kiosco}/>
        
        </header>
   </div>
  );
}


function ErrorRadios() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best') {
      setHelperText('Respuesta correcta!');
      setError(false);
    } else if (value === 'worst') {
      setHelperText('Respuesta equivocada !');
      setError(true);
    } else {
      setHelperText('¿Cual es la respuesta?');
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Elige una opción</FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="best" control={<Radio />} label="Si" />
          <FormControlLabel value="worst" control={<Radio />} label="No" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Enviar
        </Button>
        </FormControl>
    </form>
  );
}



// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://uade.edu.ar/">
//         Uade
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

