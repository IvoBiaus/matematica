import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import Puntajes from '../components/Puntajes';
import Seleccion from './Seleccion'
import Home from './Home'
import Bienvenido from './Bienvenido';
import Barra from '../components/Barra';
import Matematicas from './Matematicas'
import Lengua from './Lengua'

const Container = styled.div`
  max-width: 2080px;
  margin: 0 auto;
`;

class App extends Component {

state = {
  mostrar: 'Bienvenido',
  name: '',
  showLogin: false,
  showPuntaje: false,
  showSalir: false
};

resetName = () => {
  this.setState({
    mostrar: 'Bienvenido',
    showLogin: false,
    showPuntaje: false,
    showSalir: false,
  })
}

changeName = (newName) => {
  this.setState({name: newName})
}

handleClick = () => {
  this.setState({
    mostrar: this.state.mostrar + ' ' + this.state.name,
    showLogin: true,
    showPuntaje: false,
    showSalir: true,
  })
};

  render() {
    return (
      <div>
        {/* <Hero name={this.state.mostrar} /> */}
        <BrowserRouter>
        <div>
          <Barra login={this.state.showLogin} puntajes={this.state.showPuntaje} salir={this.state.showSalir}/>
          <Container>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} onClick={this.handleClick} changeName={this.changeName} reset={this.resetName} />}
              />
              <Route
                path="/Bienvenido"
                exact
                render={(props) => <Bienvenido {...props} name={this.state.name} />}
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
                path="/lengua"
                exact
                render={(props) => <Lengua {...props} name={this.state.name} />}
              />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
