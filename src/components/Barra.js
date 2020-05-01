import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#19bb5a',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    martinTop: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  text-decoration: none;
  margin: 0 20px;
`;

export default function ButtonAppBar(props) {

  const classes = useStyles();

  return (
    <div>
    
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title}>
            {props.login && <StyledLink to="/seleccion"> 
                Ejercicios
            </StyledLink>}
            <StyledLink className={classes.menuButton} to="/puntajes">
                Puntajes
            </StyledLink>
            <StyledLink to="/">
              <Button variant="contained" color="secondary">Salir</Button>
            </StyledLink>
          </Typography>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}
 