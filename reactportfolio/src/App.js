import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import AppBar from './components/AppBar'
import AboutMe from './components/AboutMe'
import './App.css'

function App() {
  return (
   
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lm">
          <Typography component="div" style={{ backgroundColor: '#ffeead', height: '100vh' }} >
            <AppBar />
            <AboutMe />
          </Typography>
        </Container>
      </React.Fragment>
     
     
  
  );
}

export default App;
