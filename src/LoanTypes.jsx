import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const LoanTypes = () => {
    const getCoffeMakerCard = coffeMakerObj => {
        return (
          <Grid item xs={12} sm={4}>
            <CoffeCard {...coffeMakerObj} />
          </Grid>
        );
      };
    
      return (
        <Grid container spacing={2}>
          {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
        </Grid>
      );
    };
   
        
        /*
        <div classname="loantypes">
        <Grid container spacing={4}>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard title={"Business Line of Credit"} subtitle={"Gain access to additional capital whenever you need it"}/>
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        <Grid Item xs={12} sm={6} md={4}>
        <CoffeeCard />
        </Grid>
        
        

            
            
            
            
            
            
            </Grid>
        
        </div> */
     
 
export default LoanTypes;