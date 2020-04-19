import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import Puntajes from '../components/Puntajes';
import Seleccion from './Seleccion'
import Home from './Home'
import Barra from '../components/Barra';
import Matematicas from './Matematicas'
import Lengua from './Lengua'
import Error from './Error'

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

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
    return (
      <div>
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
                path="/lengua"
                exact
                render={(props) => <Lengua {...props} name={this.state.name} />}
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
      </div>
    );
  }
}

export default App;
