import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles  } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import Puntajes from '../components/Puntajes';
import Seleccion from './Seleccion';
import Home from './Home';
import Barra from '../components/Barra';
import Matematicas from './Matematicas';
import Error from './Error';
import Typography from '@material-ui/core/Typography';
import FooterImg from '../images/footer.jpg';

const Container = styled.div`
  max-width: 980px;
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
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
});

class App extends Component {

state = {
  mostrar: 'Bienvenido',
  name: '',
  show: false
};

resetName = () => {
  this.setState({
    mostrar: 'Bienvenido',
    show: false,
  })
}

changeName = (newName) => {
  this.setState({name: newName})
}

handleClick = () => {
    this.setState({
      mostrar: this.state.mostrar + ' ' + this.state.name,
      show: true,
    })
};
render() {
  const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Hero name={this.state.mostrar} />
        <BrowserRouter>
        <div>
        <Barra login={this.state.show}/>
          <Container>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} onClick={this.handleClick} changeName={this.changeName} reset={this.resetName} />}
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
                path="/Error"
                exact
                component={Error}
              />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
        </BrowserRouter>
        <footer className={classes.footer}>
            <Container maxWidth="sm">
            <img src={FooterImg} alt="" />
            {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
            </Container>
        </footer>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
