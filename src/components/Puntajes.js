import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Api from '../controller/Api';

const useStyles = {
  table: {
    minWidth: 650,
  },
};


class Puntajes extends React.Component {
  constructor()
  {
    super();
    this.state = {
      puntajes: []
    }
  }

  componentDidMount() 
  {
    Api.getPuntajes(this.resultPuntajes.bind(this));
  }
  resultPuntajes (puntajes, error)
  {
    if(error != null) {
      this.props.history.push('/Error')
      return;
    }
    this.setState({puntajes : puntajes })
  }

  render()
  {
    const { classes } = this.props;
    return (
      <div>
      <h1 className='titleCenter'>Puntaje de los almunos</h1>
      <div>
      {/* <table>
        <thead>
            <tr>
              <th>Nombre</th>
              <th>Puntaje</th>
            </tr>
        </thead>
      <tbody> 
        {this.state.puntajes.map(function(item, key){
          return(
            <tr key={key}>
              <td>{item.Nombre}</td>
              <td>{item.Puntos}</td>
            </tr>
              )
          })}
        </tbody>
       </table> */}
       <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Puntos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.puntajes.map((row) => (
            <TableRow key={row.nombre}>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.puntos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      </div>
    );
  }
  
}

export default withStyles(useStyles)(Puntajes);