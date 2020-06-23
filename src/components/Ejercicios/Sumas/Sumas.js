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
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
    width: '90px',
    
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
    this.setState({valueNext: 'CINCO'});
  }

  guardarResultado(operacion, e) {
    let val = e.target.value;
    const array = this.state.resultados;
    array[e.target.id - 1] = ([operacion, val]);
    this.setState({resultados: array});
  }

  addToAnswer = (item, row) => {
    var result = this.state.puntos;
    if(item === row.resultado){
      this.setState({open: true});
      this.setState({openError: false});
      result = result + 5;
      this.setState({puntos: result});
    } else {
      this.setState({openError: true})
      this.setState({open: false})
      result = result - 5;
      this.setState({puntos: result})
    } 
    row.value = 'pulso';
    var select = this.state.valueNext.substr(1);
    this.setState({valueNext: select});
    if (select.charAt(0) === ''){
      this.setState({valueNext: ''});
    }
  }

  render() {
    const { classes } = this.props;
console.log(this.props);
    return (
      <React.Fragment>
          <Container>           
           <CardActions>
            <Typography className={classes.title} variant="h3">
            <Button><Typography className={classes.title} variant="h3">{this.props.name}</Typography></Button>
             , practiquemos las Sumas!!!
            </Typography>
           </CardActions>
            <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>
            <Container> 
              {this.state.nivel === 1 && <form className={classes.root}>
              {this.state.data1.map((row) => ( 
              <div className='row center'>
                <Grid> 
                  <Button className={classes.boxText} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row)}>{item}</Button>        
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
                  <Button className={classes.boxText} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row)}>{item}</Button>        
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
                  <Button className={classes.boxText} variant="contained" color="default" disableElevation id={row.id}>{row.operacion}</Button>        
                </Grid>
                {
                row.opciones.map((item) => 
                  <Button disabled={row.value} className={classes.option} variant="contained" color="default" disableElevation id={row.id} onClick={() => this.addToAnswer(item, row)}>{item}</Button>        
                )}
              </div>
              ))}
              </form>}
            </Container>
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
            <div className='row center'>
              <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Salir</Button>
              {/* No tiene sentido retrocederNivel ? */}
              {/* {this.state.nivel > 1 && <Button variant="contained" color="primary" onClick={this.retrocederNivel.bind(this)} className={classes.boton}>Anterior</Button>} */}
              {this.state.nivel < 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} disabled={this.state.valueNext} className={classes.boton}>Siguiente</Button>}
              {this.state.nivel === 3 && <Button variant="contained" color="primary" onClick={() => this.setState({openModal: true})} disabled={this.state.valueNext} className={classes.boton}>Finalizar</Button>}
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
          </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Sumas);