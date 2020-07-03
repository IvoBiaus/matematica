import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Api from '../../../controller/Api';
import Modal from '@material-ui/core/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => ({
  root: { 
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  rootA: {
    padding: theme.spacing(2),
    width: '100%',
    maxWidth: 500,
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
  option:{
    border: 'solid',
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: '25px',
    fontSize: '25px',
    height: '70px',
    width: '70px',
    textAlign: 'center',
  },
  boxText: {
    border: 'solid',
    marginRight: 25,
    backgroundColor: '#FFC226',
    borderRadius: '10px',
    height: '75px',
    width: '100px',
    fontSize: '20px'
    
  },
  boxTextLarge: {
    border: 'solid',
    marginRight: 25,
    backgroundColor: '#FFC226',
    borderRadius: '10px',
    height: '75px',
    width: '150px',
    fontSize: '20px'
    
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    fontSize: 30,
    color: "write",
    textAlign: 'center',
  },
  titleOperation: {
    fontSize: 30,
    color: "write",
    textAlign: 'center',
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "white !important",
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
function Alert(props) {
  console.log(props);
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Sumas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nivel: 1,
      data1: [],
      data2: [],
      data3: [],
      openModal: false,
      openInformation: false,
      open: false,
      openError: false,
      setOpen: '',
      setOpenError: '',
      resultados: [],
      puntos: 0,
      valueNext: 'CINCO',
    };
  }
  handleClick = () => {
    console.log("hizo ")
  };

  handleClose = () => {
    this.setState({openModal: false});
    this.setState({open: false});
    this.setState({openError: false});
    this.setState({openInformation: false});
  };

  componentDidMount() 
  {
    //Api.obtenerNivelSumas(this.state.nivel, this.resultSumas.bind(this));
    Api.obtenerEstadoDeJuego("Sumas", this.props.name, "Incompleto", this.resultEstadoJuego.bind(this));
    
  }
  resultEstadoJuego (res)
  {
    if(res === null || res.data.state === "Completo"){
      Api.obtenerNivelSumas(this.state.nivel, this.resultSumas.bind(this));
    } else {
      this.setState({openInformation: true});
      this.setState({nivel: res.data.lvl + 1});
      this.setState({puntos: res.data.score});
      this.setState({resultados: []});
      Api.obtenerNivelSumas(this.state.nivel, this.resultSumas.bind(this));
      this.setState({valueNext: 'CINCO'});
    }
  }
  //carga de operaciones por nivel de juego sumas
  resultSumas (ejercicios, nivel, error)
  {
    if(error != null) {
      this.props.history.push('/Error')
      return;
    }
    if(nivel === 1) {
      this.setState({data1 : ejercicios.data })
    }
    if(nivel === 2) {
      this.setState({data2 : ejercicios.data })
    }
    if(nivel === 3) {
      this.setState({data3 : ejercicios.data })
    }
  }

  // avanzar nivel y guardar puntaje por nivel
  avanzarNivel(e) {
    this.setState({nivel: this.state.nivel + 1});
    this.setState({resultados: []});
    this.setState({valueNext: 'CINCO'});
    Api.obtenerNivelSumas(this.state.nivel + 1, this.resultSumas.bind(this));
    if(this.state.nivel === 3){
      Api.guardarPuntajePorNivel("Sumas", this.props.name, this.state.nivel, this.state.puntos, "Completo");
    } else {
      Api.guardarPuntajePorNivel("Sumas", this.props.name, this.state.nivel, this.state.puntos, "Incompleto");
    }
  }

  // finalizar juego se guarda el score final y se actualiza el score por nivel
  finalizarJuego(e) {
    this.setState({openModal: true});
    Api.guardarPuntajeSuma(this.props.name, this.state.puntos);
    Api.guardarPuntajePorNivel("Sumas", this.props.name, this.state.nivel, this.state.puntos, "Completo");
  }

  //Mostrar respuesta correcta o incorrecta - Habilitar boton siguiente
  actionAnswer = (item, row) => {
    var result = this.state.puntos;
    if(item === row.resultado){
      this.setState({open: true});
      this.setState({openError: false});
      result = result + 10;
    } else {
      this.setState({openError: true})
      this.setState({open: false})
      result = result - 10;
    } 
    this.setState({puntos: result})
    row.value = 'pulso';
    var select = this.state.valueNext.substr(1);
    this.setState({valueNext: select});
    if (select.charAt(0) === ''){
      this.setState({valueNext: ''});
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
          <Container>           
           <CardActions>
            <h1>{this.props.name}, practiquemos las Sumas!!!</h1>
           </CardActions>
            <div className='row'>
              <h3 className='titleCenter' style={{marginRight: '30px'}}>Nivel {this.state.nivel}</h3>
              <h3 className='titleCenter'>Puntaje: {this.state.puntos}</h3>
            </div>
            <Container> 
              {this.state.nivel === 1 && <form className={classes.root}>
              {this.state.data1.map((row) => ( 
              <div className='row center'>
                <Grid> 
                  <Button disabled={row.value} className={classes.boxText} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid> <div style={{ fontSize:'200%', marginTop: '10px', marginRight: '15px'}}>=</div>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.actionAnswer(item, row)}>{item}</Button>        
                )}
              </div>
              ))}
              </form>}
            </Container> 
            <Container> 
              {this.state.nivel === 2 && <form className={classes.root}>
              {this.state.data2.map((row) => ( 
              <div className='row center'>
                <Grid> 
                  <Button disabled={row.value} className={classes.boxText} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid> <div style={{ fontSize:'200%', marginTop: '10px', marginRight: '15px'}}>=</div>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.actionAnswer(item, row)}>{item}</Button>        
                )}
              </div>
              ))}
              </form>}
            </Container>
            <Container> 
              {this.state.nivel === 3 && <form className={classes.root}>
              {this.state.data3.map((row) => ( 
              <div className='row center'>
                <Grid> 
                  <Button disabled={row.value} className={classes.boxTextLarge} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid> <div style={{ fontSize:'200%', marginTop: '10px', marginRight: '15px'}}>=</div>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.actionAnswer(item, row)}>{item}</Button>        
                )}
              </div>
              ))}
              </form>}
            </Container>
            <div>
              <Snackbar open={this.state.open} autoHideDuration={1200} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                  Correcto! SUMAS PUNTOS  +10 !!
                </Alert>
              </Snackbar>
              <Snackbar open={this.state.openError} autoHideDuration={1200} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error">
                  Incorrecto! RESTAS PUNTOS  -10 !!
                </Alert>
              </Snackbar>
            </div>
            <div className='row center'>
              <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Salir</Button>
              {/* No tiene sentido retrocederNivel ? */}
              {/* {this.state.nivel > 1 && <Button variant="contained" color="primary" onClick={this.retrocederNivel.bind(this)} className={classes.boton}>Anterior</Button>} */}
              {this.state.nivel < 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} disabled={this.state.valueNext} className={classes.boton}>Siguiente</Button>}
              {this.state.nivel === 3 && <Button variant="contained" color="primary" onClick={this.finalizarJuego.bind(this)} disabled={this.state.valueNext} className={classes.boton}>Finalizar</Button>}
            </div>
            <Modal
            open={this.state.openModal}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
              <div style={getModalStyle()} className={classes.paper}>
                <h2 id="simple-modal-title">Terminaste los ejercicios</h2>
                <p id="simple-modal-description">
                  Tu puntaje es {this.state.puntos}
                </p>
                <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
              </div>
            </Modal>
            <Modal
            open={this.state.openInformation}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
              <div style={getModalStyle()} className={classes.paper}>
                <h2 id="simple-modal-title">El Juego se encuentra incompleto. Completalo!</h2>
                <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
              </div>
            </Modal>
          </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Sumas);