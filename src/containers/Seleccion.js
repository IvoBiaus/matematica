import React from 'react';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Matematica from '../images/matematica.jpg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

// const Container = styled.div`
//   max-width: 980px;
//   margin: 0 auto;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.h2,
    alignSelf: 'center',
    margin: "4px 0",
    paddingLeft: '55px',
  },
  imagen: {
    height: '40px',
  },
  panel: {
    backgroundColor: 'rgb(49, 185, 132)',
  },
  content: {
    backgroundColor: '#FFC226',
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
}));


export default function Seleccion(props) {
  
    const classes = useStyles();
    
    return (
      <div>
      <Grid  container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}>
            <div>
              <h1 className='titleCenter'>Elegí que queres pracitar hoy</h1>
            </div>
            <div className={classes.root}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.panel}
                >
                  <img className={classes.imagen} src={Matematica} alt="matematica" />
                  <Typography className={classes.heading}>Matemáticas</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails  className={classes.content}>
                  <Typography>
                      <Link to={{ pathname: '/matematicas', state: { ej: 'Tablas'} }}>
                        <Button  className={classes.boton} variant="contained">Tablas</Button>
                      </Link>
                      <Link to={{ pathname: '/matematicas', state: { ej: 'Billetes'} }}>
                        <Button  className={classes.boton} variant="contained">Billetes</Button>
                      </Link>
                      <Link to={{ pathname: '/matematicas', state: { ej: 'Sumas'} }}>
                        <Button  className={classes.boton} variant="contained">Sumas</Button>
                      </Link>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              {/* <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  className={classes.panel}
                >
                  <img className={classes.imagen} src={Lengua} alt="lengua" />
                  <Typography className={classes.heading}>Lengua</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails  className={classes.content}> 
                  <Typography>
                      <Link to={{ pathname: '/lengua', state: { ej: 'Silabas'} }}>
                        <Button  className={classes.boton} variant="contained">Silabas</Button>
                      </Link>
                      <Link to={{ pathname: '/lengua', state: { ej: 'Otro EJ'} }}>
                        <Button  className={classes.boton} variant="contained">Otro EJ</Button>
                      </Link>
                      <Link to={{ pathname: '/lengua', state: { ej: 'Otro Ej 2'} }}>
                        <Button  className={classes.boton} variant="contained">Otro Ej</Button>
                      </Link>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel> */}
            </div>
        </Grid>
      </div>
    );
}
