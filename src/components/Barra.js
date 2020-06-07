import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';





const useStyles = (theme) => ({
  root: {
    backgroundColor: '#19bb5a',
  },
  paper: {
    position: 'absolute',

    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    martinTop: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
});

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class Barra extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: '',
    }

  }

  salirModal() {
    this.setState({ open: true });
  }

  handleClose = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nombre");
    this.props.hideOptions();
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return(
      <div>
      
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography className={classes.title}>
              <StyledLink className={classes.menuButton} to="/puntajes">
                  Puntajes
              </StyledLink>
              {this.props.show === true && <StyledLink className={classes.menuButton} to="/seleccion"> 
                  Ejercicios
              </StyledLink>}
              {this.props.show === true && 
                <Button variant="contained" color="secondary" onClick={this.salirModal.bind(this)}>Salir</Button>
              }
            </Typography>
          </Toolbar>
        </AppBar>
        <Modal
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={getModalStyle()} className={classes.paper}>
              <h2 id="simple-modal-title">Estas seguro que querés Salir?</h2>
              <StyledLink className={classes.menuButton} to="/">
                <Button variant="contained" onClick={this.handleClose.bind(this)}>Aceptar</Button>
              </StyledLink>
            </div>
          </Modal>
      
      </div>
    )
  };
}
 

export default withStyles(useStyles)(Barra);;