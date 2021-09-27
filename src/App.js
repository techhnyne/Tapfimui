import React from "react";
import {createTheme,ThemeProvider, Grid} from '@material-ui/core';
import Menu from "./Menu";
import Apply from './Apply';
import Home from './Home';
import LoanTypes from './LoanTypes';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const theme = createTheme({
  palette:{
    primary:{
      main:"#01bbe8"
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div classname="appcontainer">
      <div item container><Menu /></div>
      <div item container>
      <Route exact path="/home">
          <Home />
         </Route>
         <Route path="/Apply">
         <Apply />
          </Route>
          <Route path="/LoanTypes">
         <LoanTypes />
          </Route>
      
      </div>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
