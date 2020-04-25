import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Api from '../../controller/Api';
import Modal from '@material-ui/core/Modal';




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
  boton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginRight: 16,
    marginTop: 20,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

class Tablas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nivel: 1,
      data: [],
      open: false,
      setOpen: '',
    };
  }

  handleClose = () => {
    this.setState({open: false});
  };

  componentDidMount() 
  {
    Api.obtenerNivelTablas(this.state.nivel, this.resultTablas.bind(this));
  }
  resultTablas (ejercicios, error)
  {
    if(error != null) {
      this.props.history.push('/Error')
      return;
    }
    this.setState({data : ejercicios })
  }

  
  avanzarNivel(e) {
    this.setState({nivel: this.state.nivel + 1});

    Api.obtenerNivelTablas(this.state.nivel + 1, this.resultTablas.bind(this));
  }


  render() {
    const { classes } = this.props;
    return (
      <div className='column'>
        <h1>Hola {this.props.name}</h1>
        <h2 className='titleCenter'>Practiequemos las Tablas</h2>
        <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>
        <form className={classes.root}>
          {this.state.data.map((row) => (        
              <TextField id={row.id} label={row.operacion} />
          ))}
        </form>
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Volver</Button>
          {this.state.nivel < 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} className={classes.boton}>Siguiente</Button>}
          {this.state.nivel === 3 && <Button variant="contained" color="primary" onClick={() => this.setState({open: true})} className={classes.boton}>Finalizar</Button>}
        </div>
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
          <div style={getModalStyle()} className={classes.paper}>
            <h2 id="simple-modal-title">Terminaste los ejercicios</h2>
            <p id="simple-modal-description">
              Tu puntaje es "xxxxxx"
            </p>
            <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(Tablas);