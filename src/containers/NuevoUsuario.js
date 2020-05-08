import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Api from '../controller/Api';
import Modal from '@material-ui/core/Modal';
import FooterImg from '../images/cat-looking.gif';



const useStyles = theme => ({
  paper: {
    position: 'absolute',
    
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  botonSecundario: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
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

class NuevoUsuario extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      open: false,
      open1: false,
    }
  }
  isFormValid = () => {
    const {name} = this.state
    return name
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  handleClick(e) {
    // this.saySomething("element clicked");
    Api.exsiteUsuario(this.state.name, this.resultadoUsuario.bind(this));
  }

  resultadoUsuario (existe, error)
  {
    if(error != null) {
      // Se comenta para pruebas contra el mock. Cuando vaya a la api usar esta logica de error.
      // this.props.history.push('/Error')
      // return;
      this.setState({open1: true});
    }
    if (existe) {
      this.setState({open: true});
    } else {
      this.setState({open1: true});
    }
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleCloseAndExit = () => {
    this.setState({open: false});
    this.props.history.push('/Home')
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
            <Grid item xs>
              <div>
                <h1>Nuevo Usuario</h1>
              </div>
            </Grid>
            <Grid item xs>
                <TextField id="standard-basic" label="Cómo te llamas?" onChange={(event) => {this.handleChange(event)}} />
                <Button className={classes.botonSecundario} variant="contained" onClick={this.handleClick.bind(this)} disabled={!this.state.name}>Entrar</Button>
            </Grid>
        </Grid>
        <Grid item xs={3} className={classes.contenedroImg}>
           <img className={classes.imgFotter} src={FooterImg} alt="" />
        </Grid>
        {/* Modal de nombre duplicado */}
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h2 id="simple-modal-title">Ups! El nombre ya esta usado</h2>
            <p id="simple-modal-description">
              Elegí otro nombre diferente :)!!
            </p>
            <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
          </div>
        </Modal>
        
        {/* Modal usuario creado exitosamente */}
        <Modal
        open={this.state.open1}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h2 id="simple-modal-title">El usuario está creado</h2>
            <p id="simple-modal-description">
              Ya podes empezar!!
            </p>
            <Button variant="contained" onClick={this.handleCloseAndExit.bind(this)}>Aceptar</Button>
          </div>
        </Modal>
      </div>
      );
  }
  
}


export default withStyles(useStyles)(NuevoUsuario);;