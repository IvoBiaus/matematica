import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import Puntajes from '../components/Puntajes';
import Seleccion from './Seleccion';
import Home from './Home';
import Barra from '../components/Barra';
import Matematicas from './Matematicas';
import Error from './Error';
import Grid from '@material-ui/core/Grid';
import AppByM1 from '../components/Ejercicios/ByM/AppByM1';
import AppByM2 from '../components/Ejercicios/ByM/AppByM2';
import AppByM3 from '../components/Ejercicios/ByM/AppByM3';
import NuevoUsuario from './NuevoUsuario'

const Container = styled.div`
  ${'' /* max-width: 980px; */}
  margin: 0 auto;
`;

const useStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#FFC226',
  },
  contenedroImg: {
    justifyContent: 'flex-end',
    flex: '1 1',
    minWidth: '0',
    minHeight: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  imgFotter: {
    width: '100%',
  }
});

class App extends Component {

  state = {
    name: localStorage.getItem("nombre"),
    show: localStorage.getItem("token") ? true : false,
  };

  showOptions = () => {
    this.setState({ show: true });
  }

  hideOptions = () => {
    this.setState({ show: false });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hero />
        <BrowserRouter>
          <div>
            <Container>
              <Barra show={this.state.show} hideOptions={this.hideOptions}/>
              <Grid>
                <Grid item xs={12}>
                  <Switch>
                    <Route
                      path="/"
                      exact
                      render={(props) => <Home {...props} showOptions={this.showOptions}/>}
                    />
                    <Route
                      path="/NuevoUsuario"
                      exact
                      component={NuevoUsuario}
                    />
                    <Route
                      path="/Seleccion"
                      exact
                      component={Seleccion}
                    />
                    <Route
                      path="/puntajes"
                      exact
                      component={Puntajes}
                    />
                    <Route
                      path="/matematicas"
                      exact
                      render={(props) => <Matematicas {...props} name={this.state.name} />}
                    />
                    <Route
                      path="/AppByM1"
                      exact
                      component={AppByM1}
                    />
                    <Route
                      path="/AppByM2"
                      exact
                      component={AppByM2}
                    />
                    <Route
                      path="/AppByM3"
                      exact
                      component={AppByM3}
                    />
                    <Route
                      path="/Error"
                      exact
                      component={Error}
                    />
                    <Redirect to="/" />
                  </Switch>
                </Grid>
                {/* <Grid item xs={3}>
              <img className={classes.imgFotter} src={FooterImg} alt="" />
            </Grid> */}
              </Grid>
            </Container>
          </div>
        </BrowserRouter>
        {/* <footer className={classes.footer}>
            <Container className={classes.contenedroImg}>
              <img className={classes.imgFotter} src={FooterImg} alt="" />
            </Container>
        </footer> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
