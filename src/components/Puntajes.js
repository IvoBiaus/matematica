import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Api from '../controller/Api';
import Grid from '@material-ui/core/Grid';

const useStyles = {
  root: {
    flexGrow: 1,
  },
  table: {
    height: '400px',  
    width: '300px',
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
       <Grid container className={classes.root} spacing={2}>
        <Grid item xs>
            <TableContainer  className={classes.table}>
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
          </Grid>
          <Grid item xs>
            <TableContainer  className={classes.table}>
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
          </Grid>
          <Grid item xs>
            <TableContainer  className={classes.table}>
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
          </Grid>
        </Grid>
      </div>
      </div>
    );
  }
  
}

export default withStyles(useStyles)(Puntajes);