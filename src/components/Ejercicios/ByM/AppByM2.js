import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Api from '../../../controller/Api';
import './App.css';

/* Imagenes de Billetes  */
import diezpesos from './images/billetesymonedas/billetes/diezpesos.png';
import veintepesos from './images/billetesymonedas/billetes/veintepesos.png';
import cincuentapesos from './images/billetesymonedas/billetes/cincuentapesos.png';
import cienpesos from './images/billetesymonedas/billetes/cienpesos.png';
import doscientospesos from './images/billetesymonedas/billetes/doscientospesos.png';
import quinientospesos from './images/billetesymonedas/billetes/quinientospesos.png';
import milpesos from './images/billetesymonedas/billetes/milpesos.png';
/* Imagenes de Golosinas  */
import gol1 from './images/billetesymonedas/n/gol1.png';
import gol2 from './images/billetesymonedas/n/gol2.png';
import gol3 from './images/billetesymonedas/n/gol3.png';
/* Imagene extras  */
import gatoEstudia from './images/billetesymonedas/gatoestudia.gif';
import gatoFeliz from './images/billetesymonedas/gatofeliz.gif';
/* Imagen Gato Grande */
import FooterImg from '../../../images/cat-walking.gif';
/* Funcion principal  */
export default function StickyFooter(props) {

  /* Constantes  */
  const classes = useStyles();
  const imageCollection = [
    {
      bille: diezpesos,
      valor: 10
    },
    {
      bille: veintepesos,
      valor: 20
    },
    {
      bille: cincuentapesos,
      valor: 50
    },
    {
      bille: cienpesos,
      valor: 100
    },
    {
      bille: doscientospesos,
      valor: 200
    },
    {
      bille: quinientospesos,
      valor: 500
    },
    {
      bille: milpesos,
      valor: 1000
    }];
  const getRandomImage = () => imageCollection[Math.floor(Math.random() * imageCollection.length)];

  const imageCollectionN = [
    {
      golosina: gol1,
      valor: 25
    },
    {
      golosina: gol2,
      valor: 52
    },
    {
      golosina: gol3,
      valor: 16
    }];

  const getRandomImageN = () => imageCollectionN[Math.floor(Math.random() * imageCollectionN.length)];

  var billete1 = getRandomImage();
  var totalbille = billete1.valor;
  var golosina1 = getRandomImageN();
  var totalgolo = golosina1.valor;
  // eslint-disable-next-line
  var TotalByM = parseInt(totalbille / totalgolo);

  return (
    <div className={classes.root}>
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
          <Container component="main" className={classes.main} maxWidth="sm">
            {/* Comienzo  */}
            <h2>Hola {localStorage.getItem("nombre")} estás en el Nivel 2 - 20 puntos </h2>
            <Typography variant="h6" component="h6" gutterBottom>
              Con ese billete, ¿Cuántas golosinas podes comprar ?
            </Typography>
            {/* Cantidad Cuadro de texto + Boton Enviar */}
            <ValordeEntrada c={TotalByM} />
          </Container>
          {/* Fotos random del billete  */}
          <Container maxWidth="sm">
            <div className="App">
              <header className="App-header">
                <img src={billete1.bille} alt="billete" />
                <p></p>
                <img src={golosina1.golosina} alt="golosina" />
                <p></p>
              </header>
            </div>
            {/* Subir 1 nivel */}
            <Button className={classes.boton} variant="contained" component={Link} to={'/AppByM3'}>Ir al nivel 3</Button>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

//Funcion valor entrada del usuario
function ValordeEntrada(props) {
  const [valorUsuario, setValorUsuario] = useState("")
  var valorUsu = (Number(valorUsuario));
  var Total = props.c;
  return (
    <div>
      <form >
        <div>
          <TextField id="outlined-basic" label="Cantidad" variant="outlined" type="text" value={valorUsuario} onChange={(e) => setValorUsuario(e.target.value)} />
        </div>
      </form>
      <div>
        <p></p>
        <Evento a={Total} b={valorUsu} />
      </div>
    </div>
  )
}

// Boton enviar y  Evento
function Evento(props) {
  const puntajeOk = 20;
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const [openSi, setOpenSi] = React.useState(false);
  const handleOpenSi = () => { setOpenSi(true); setCount(count + puntajeOk); };
  const handleCloseSi = () => { setOpenSi(false); };
  const [openNo, setOpenNo] = React.useState(false);
  const handleOpenNo = () => { setOpenNo(true); };
  const handleCloseNo = () => { setOpenNo(false); };

  if (props.a === props.b) {
    return (
      <div>
        <Button type="button" variant="contained" size="small" color="primary" className={classes.margin} onClick={handleOpenSi} >
          Enviar
      </Button>
        <div>
          <Modal
            open={openSi}
            onClose={handleCloseSi}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            disableScrollLock={false}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div style={getModalStyle()} className={classes.paper}>
              <h1 id="simple-modal-title">Bien ! Respuesta Correcta !!!</h1>
              <h2 id="simple-modal-description"> Ganaste 20 Puntos !</h2>
              <h3 id="simple-modal-title">Llevás acumulado en este Nivel {count} Puntos </h3>
              <EnvioApi x={puntajeOk} />
              <img src={gatoFeliz} className="App-choco" alt="gato" />
              <Button className={classes.boton} type="submit" variant="contained" component={Link} to={'/AppByM2'} onClick={handleCloseSi}  >Vuelve a jugar!</Button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        <Button type="button" variant="contained" size="small" color="primary" className={classes.margin} onClick={handleOpenNo} >
          Enviar
       </Button>
        <Modal
          open={openNo}
          onClose={handleCloseNo}
          disableBackdropClick={true}
          disableEscapeKeyDown={true}
          disableScrollLock={false}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description">
          <div style={getModalStyle()} className={classes.paper}>
            <h1 id="simple-modal-title">No es esa opción :(</h1>
            <h3 id="simple-modal-description"> No ganaste puntos, Jugá de nuevo !!! </h3>
            <h3 id="simple-modal-title">Llevás acumulado en este Nivel {count} Puntos </h3>
            <img src={gatoEstudia} className="App-choco" alt="gato" />
            <Button className={classes.boton} type="submit" variant="contained" component={Link} to={'/AppByM2'} onClick={handleCloseNo} >Vuelve a jugar!</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

function EnvioApi(props) {
  const puntaje = 20;
  if (props.x === puntaje) {
    Api.guardarPuntajeBilletes(localStorage.getItem("nombre"), puntaje);
    return (
      <div>
        <h5>Los puntos fueron cargados al puntaje general</h5>
      </div>
    )
  }
  else {
    return (
      <div>
        <h5>No se cargaron puntos al puntaje general</h5>
      </div>
    )
  }
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
    backgroundColor: '#9BABF5',
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
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  alerta: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,

  };
}