import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Form from '../components/Form';


class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.props.reset();
  }
  
  
  isFormValid = () => {
    const {name} = this.state
  
    return name
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    
    return (
      <div>
        <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
          <div>
            <h1>Bienvenido a las clases</h1>
          </div>
          <Form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" onChange={(event) => {this.props.changeName(event.target.value); this.handleChange(event)}} />
            <Button type="submit" variant="contained" component={Link} to={'/Seleccion'} onClick={this.props.onClick} disabled={!this.state.name}>Entrar</Button>
          </Form>
        </Grid>
      </div>
      );
  }
  
}


export default Home;