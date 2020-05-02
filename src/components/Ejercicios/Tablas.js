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

class Tablas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nivel: 1,
      data1: [],
      data2: [],
      data3: [],
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
  resultTablas (ejercicios, nivel, error)
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

    Api.obtenerNivelTablas(this.state.nivel + 1, this.resultTablas.bind(this));
  }

  retrocederNivel(e) {
    this.setState({nivel: this.state.nivel - 1});

    Api.obtenerNivelTablas(this.state.nivel - 1, this.resultTablas.bind(this));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='column'>
        <h1>Hola {this.props.name}</h1>
        <h2 className='titleCenter'>Practiquemos las Tablas</h2>
        <h3 className='titleCenter'>Nivel {this.state.nivel}</h3>


        {this.state.nivel === 1 && <form className={classes.root}>
          {this.state.data1.map((row) => (        
              <TextField 
                variant="outlined" 
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  }
                }}
                InputProps={{
                  classes : {
                    input: classes.input,
                    notchedOutline: classes.notchedOutline,
                  }
                }}
                id={row.id} 
                label={row.operacion} />
            ))}
        </form>}

        {this.state.nivel === 2 && <form className={classes.root}>
          {this.state.data2.map((row) => (        
              <TextField 
                variant="outlined" 
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  }
                }}
                InputProps={{
                  classes : {
                    input: classes.input,
                    notchedOutline: classes.notchedOutline,
                  }
                }}
                id={row.id} 
                label={row.operacion} />
            ))}
        </form>}

        {this.state.nivel === 3 && <form className={classes.root}>
          {this.state.data3.map((row) => (        
              <TextField 
                variant="outlined" 
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                  }
                }}
                InputProps={{
                  classes : {
                    input: classes.input,
                    notchedOutline: classes.notchedOutline,
                  }
                }}
                id={row.id} 
                label={row.operacion} />
            ))}
        </form>}

        
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Salir</Button>
          {this.state.nivel > 1 && <Button variant="contained" color="primary" onClick={this.retrocederNivel.bind(this)} className={classes.boton}>Anterior</Button>}
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