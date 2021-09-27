import React, {useState} from "react";
import TapfiLogo from './images/Tapfi-Logo-bl.png';
import { Grid } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";




const Menu = () => {

    const [menuOpen, menuToggle] = useState(false);
    const handlemenuToggle = () => {
        menuToggle(!menuOpen);
    };
    const renderClasses = () => {
        let classes = null;
        
        if (menuOpen) {
            classes += "active"
        }
        return classes

    }

    return (  
        <Router>
        <Grid className="navbar">        
           <div className="logo"><img src={TapfiLogo} alt="TapFi. logo" width= "150" />
           </div>
           <Switch>
           <div className={`menu ${menuOpen &&'active'}`}>
               <NavLink to="/How-It-Works">How It Works</NavLink>
               <NavLink to="/LoanTypes">Loan Types</NavLink>
               <NavLink to="/Faq">Faq</NavLink>
               <NavLink to="/contact">Contact Us</NavLink>
               <button className="apply">START APPLICATION</button>            
              </div>  
              </Switch>               
            <div onClick={handlemenuToggle} className="hamburger-toggle">
            <i className="fas fa-bars fa-lg"></i>             
             
          </div>
        </Grid>
        </Router>



    )
}
 
export default Menu;