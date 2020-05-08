import React, { Component, useState } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Api from '../../../controller/Api';
import Modal from '@material-ui/core/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;

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
  option:{
    border: 'solid',
    // // border-radius: '20px',
    // cursor: 'pointer',
    // padding: '25px',
    // bgcolor: 'background.paper',
    // borderColor: 'text.primary',
    // m: 1,
    // border: 100,
    // style: { width: '5rem', height: '5rem' },
    marginRight: 15,
    // marginTop: 0,
    backgroundColor: '#FFFFFF',
    // color: '#000000',
    borderRadius: '10px',
    // display: 'inline-block',
    fontSize: '25px',
    height: '70px',
    width: '70px',
    // border: '0',
    textAlign: 'center',
    // transition: 'all 290ms cubic-bezier(0.79, 0.01, 0.38, 0.99)',
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
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  labelRoot: {
    fontSize: 30,
    color: "green",
    "&$labelFocused": {
      color: "blue",
      fontSize: 20,
    }
  },
  labelFocused: {},
  input: {
    fontSize: '32px',
    color: '#FFFFFF',
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
      open: false,
      openError: false,
      setOpen: '',
      setOpenError: '',
      resultados: [],
      puntos: 0,
    };
  }
  handleClick = () => {
    console.log("hizo ")
  };

  handleClose = () => {
    this.setState({openModal: false});
    this.setState({open: false});
    this.setState({openError: false});
  };

  componentDidMount() 
  {
    Api.obtenerNivelSumas(this.state.nivel, this.resultSumas.bind(this));
  }
  resultSumas (ejercicios, nivel, error)
  {
    if(error != null) {
      this.props.history.push('/Error')
      return;
    }
    if(nivel === 1) {
      this.setState({data1 : ejercicios })
    }
    if(nivel === 2) {
      this.setState({data2 : ejercicios })
    }
    if(nivel === 3) {
      this.setState({data3 : ejercicios })
    }
  }

  
  avanzarNivel(e) {
    this.setState({nivel: this.state.nivel + 1});
    console.log(this.state.resultados);
    this.setState({resultados: []});
    Api.obtenerNivelSumas(this.state.nivel + 1, this.resultSumas.bind(this));
  }

  guardarResultado(operacion, e) {
    let val = e.target.value;
    const array = this.state.resultados;
    array[e.target.id - 1] = ([operacion, val]);
    this.setState({resultados: array});
  }

  addToAnswer = (item, resultado) => {
    var result = this.state.puntos;
    
    if(item == resultado){
      this.setState({open: true})
      this.setState({openError: false})
      result = result + 5;
      this.setState({puntos: result})
    } else {
      this.setState({openError: true})
      this.setState({open: false})
      result = result - 5;
      this.setState({puntos: result})
    }
    
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className='coumn'>
        <h1 className='title'>Hola {this.props.name}</h1>
        <h2 className='titleCenter'>Practiquemos las Sumas</h2>
        <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>


        {this.state.nivel === 1 && <form className={classes.root}>
          {this.state.data1.map((row) => ( 
            <div className='row center'>
              <div className={classes.rootA} id={row.id}>
                <Typography variant="h3" component="h2" gutterBottom>
                  {row.operacion}
                </Typography>
              </div>
              {
              row.opciones.map((item) => 
                // <span className={`title-medium m-right-5`, classes.option} id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</span>,
                <div>
                  <Button className={`title-medium m-right-5`, classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</Button>
                </div>             
                )
              }
            </div>
          ))}
        </form>}
        {this.state.nivel === 2 && <form className={classes.root}>
          {this.state.data2.map((row) => (        
              <div className='row center'>
              <div className={classes.rootA} id={row.id}>
              <Typography variant="h3" component="h2" gutterBottom>
                  {row.operacion}
              </Typography>
            </div>
            {
              row.opciones.map((item) => 
              // <span className={`title-medium m-right-5`, classes.option} id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</span>,
              <div>
                <Button className={`title-medium m-right-5`, classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</Button>
              </div> 
              )
            }
            </div>
            ))}
        </form>}
        {this.state.nivel === 3 && <form className={classes.root}>
          {this.state.data3.map((row) => (        
              <div className='row center'>
              <div className={classes.rootA} id={row.id}>
              <Typography variant="h3" component="h2" gutterBottom>
                  {row.operacion}
              </Typography>
            </div>
            {
              row.opciones.map((item) => 
              // <span className={`title-medium m-right-5`, classes.option} id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</span>,
              <div>
                <Button className={`title-medium m-right-5`, classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row.resultado)}>{item}</Button>
              </div> 
              )
            }
            </div>
            ))}
        </form>}

        <div>
              <Snackbar open={this.state.open} autoHideDuration={1500} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                  Correcto! SUMAS PUNTOS  +5 !!
                </Alert>
              </Snackbar>
              <Snackbar open={this.state.openError} autoHideDuration={1500} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="error">
                  Incorrecto! RESTAS PUNTOS  -5 !!
                </Alert>
              </Snackbar>
        </div>
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Salir</Button>
          {/* No tiene sentido retrocederNivel ? */}
          {/* {this.state.nivel > 1 && <Button variant="contained" color="primary" onClick={this.retrocederNivel.bind(this)} className={classes.boton}>Anterior</Button>} */}
          {this.state.nivel < 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} className={classes.boton}>Siguiente</Button>}
          {this.state.nivel === 3 && <Button variant="contained" color="primary" onClick={() => this.setState({openModal: true})} className={classes.boton}>Finalizar</Button>}
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
      </div>
    );
  }
}

export default withStyles(useStyles)(Sumas);