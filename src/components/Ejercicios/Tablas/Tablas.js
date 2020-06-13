import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Api from '../../../controller/Api';
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
  },
  puntajeParcial: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '400px',
    fontFamily: 'cursive',
  },
  nivel: {
    textAlign: 'left',
    fontFamily: 'cursive',
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
      puntos1: '---',
      puntos2: '---',
      puntos3: '---',
      open: false,
      setOpen: '',
      resultados: [],
    };
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.history.push('/Seleccion');
  };

  componentDidMount() 
  {
    if (localStorage.getItem(localStorage.getItem("nombre"))) {
      var obj = localStorage.getItem(localStorage.getItem("nombre"));
      var json = JSON.parse(obj);
      
      this.setState({nivel: json.nivel + 1});
      this.setState({puntos1: json.puntos1});
      this.setState({puntos2: json.puntos2});
      this.setState({puntos3: json.puntos3});

      Api.obtenerNivelTablas(json.nivel + 1, this.resultTablas.bind(this));
    } else {
      Api.obtenerNivelTablas(this.state.nivel, this.resultTablas.bind(this));
    }
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

  
  async avanzarNivel(e) {
    //Scroll al top para mobile
    window.scrollTo(0, 0);
    var puntaje;
    //Calculo puntaje contra la api y seteo
    if(this.state.nivel === 1) {
      puntaje = await Api.verificarTablas(this.state.nivel, this.state.resultados);
      this.setState({puntos1 : puntaje });
    }
    if(this.state.nivel === 2) {
      puntaje = await Api.verificarTablas(this.state.nivel, this.state.resultados);
      this.setState({puntos2 : puntaje })
    }
    if(this.state.nivel === 3) {
      puntaje = await Api.verificarTablas(this.state.nivel, this.state.resultados);
      this.setState({puntos3 : puntaje })
    }

    //Guardo estado por si se sale el juego
    var dataCheckpoint = {
      'nivel': this.state.nivel,
      'puntos1': this.state.puntos1,
      'puntos2': this.state.puntos2,
      'puntos3': this.state.puntos3,
    };
    localStorage.setItem(localStorage.getItem("nombre"), JSON.stringify(dataCheckpoint));

    //Si termino no vuelvo a buscar niveles y borro estado.
    if (this.state.nivel === 3) {
      localStorage.removeItem(localStorage.getItem("nombre"));
      Api.guardarPuntaje(localStorage.getItem("nombre"), this.state.puntos1+this.state.puntos2+this.state.puntos3)
      this.setState({open: true});
      return;  
    }

    //Avanzo nivel - imprimo resultado para pruebas
    this.setState({nivel: this.state.nivel + 1});
    // console.log(this.state.resultados);
    this.setState({resultados: []});
    Api.obtenerNivelTablas(this.state.nivel, this.resultTablas.bind(this));
  }

  // retrocederNivel(e) {
  //   this.setState({nivel: this.state.nivel - 1});

  //   // Api.obtenerNivelTablas(this.state.nivel - 1, this.resultTablas.bind(this));
  // }

  guardarResultado(operacion, e) {
    let val = e.target.value;
    const array = this.state.resultados;
    // array[e.target.id - 1] = ([operacion, val]);

    array.push({"op": operacion , "resultado": val})

    this.setState({resultados: array});
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='column'>
        <h1>Hola {localStorage.getItem("nombre")} - Estas en el Nivel {this.state.nivel}</h1>
        <h2 className='titleLeft'>Practiquemos las Tablas</h2>
        {this.state.nivel > 0 && 
          <div  className={classes.puntajeParcial}>
            <h3 className={classes.nivel}>Nivel 1</h3> 
            
            <h3>Puntos: {this.state.puntos1}</h3>
          </div>}

          {this.state.nivel > 1 && 
          <div  className={classes.puntajeParcial}>
            <h3 className={classes.nivel}>Nivel 2</h3> 
            
            <h3>Puntos: {this.state.puntos2}</h3>
          </div>}

          {this.state.nivel > 2 && 
          <div  className={classes.puntajeParcial}>
            <h3 className={classes.nivel}>Nivel 3</h3> 
            
            <h3>Puntos: {this.state.puntos3}</h3>
          </div>}

        {this.state.nivel === 1 && <form className={classes.root}>
          {this.state.data1.map((row) => (
              <TextField 
                key={row._id}
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
                id={row._id} 
                label={row.op}
                onChange = {(e) => this.guardarResultado(row.op, e)} />
            ))}
        </form>}

        {this.state.nivel === 2 && <form className={classes.root}>
          {this.state.data2.map((row) => (        
              <TextField 
                key={row._id}
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
                id={row._id} 
                label={row.op}
                onChange = {(e) => this.guardarResultado(row.op, e)} />
            ))}
        </form>}

        {this.state.nivel === 3 && <form className={classes.root}>
          {this.state.data3.map((row) => (        
              <TextField 
                key={row._id}
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
                id={row._id} 
                label={row.op}
                onChange = {(e) => this.guardarResultado(row.op, e)} />
            ))}
        </form>}

        
        <div>
          <Button className={classes.boton} variant="contained" component={Link} to={'/seleccion'}>Salir</Button>
          {/* No tiene sentido retrocederNivel ? */}
          {/* {this.state.nivel > 1 && <Button variant="contained" color="primary" onClick={this.retrocederNivel.bind(this)} className={classes.boton}>Anterior</Button>} */}
          {this.state.nivel < 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} className={classes.boton}>Siguiente</Button>}
          {this.state.nivel === 3 && <Button variant="contained" color="primary" onClick={this.avanzarNivel.bind(this)} className={classes.boton}>Finalizar</Button>}
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
              Tu puntaje es {this.state.puntos1 + this.state.puntos2 + this.state.puntos3}
            </p>
            <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(Tablas);