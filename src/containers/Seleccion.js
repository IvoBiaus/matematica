import React from 'react';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Matematica from '../images/matematica.jpg';
import Sumas from '../images/sumas.png';
import Billetes from '../images/billetes.jpeg';
import Tablas from '../images/tablas.jpg';
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
    height: 100,
    width: 150,
    border: 'solid', 
  },
  panel: {
    backgroundColor: 'rgb(49, 185, 132)',
  },
  content: {
    backgroundColor: '#f9f7db',
  },
  boton: {
    display: 'inline-table',
    marginRight: 16,
    marginTop: 5,
    width: "100px",
  },
  botones: {
    display: 'inline-table',
    paddingTop: '15px',
  }
}));


export default function Seleccion() {
  
    const classes = useStyles();
    
    return (
      <div>
        <Grid 
          justify="center"
          style={{ minHeight: '90vh', backgroundColor: '#e6b800'}}>
            <div className='column'>
              <h1>Elegí un juego</h1>
              <div className="row">
              <React.Fragment>
              <div className='card col-3 col-sm-6 col-md-4 col-lg-3 mb-4'>
                  <img className={classes.imagen} src={Billetes} alt="billetes" />
                </div>
              
              
              
                <div className='card col-3 col-sm-6 col-md-4 col-lg-3 mb-4'>
                  <img className={classes.imagen} src={Sumas} alt="sumas" /> 
                </div>
                
                <div className='card col-3 col-sm-6 col-md-4 col-lg-3 mb-4'>
                  <img className={classes.imagen} src={Tablas} alt="tablas" /> 
                </div>
             
                </React.Fragment>
                </div>
            </div>
        
        </Grid>
      </div>
    );
}
