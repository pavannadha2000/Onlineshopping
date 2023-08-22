import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home.js';
import Header from './Header.js';
import Product from './Product.js';
import Checout from './Checout';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/checout'>
            <Header></Header>
            
          </Route>
          <Route path='/'>
             <Header/> 
             <Home/>
             
          </Route>
        </Switch>
      </Router>
     

       <Checout/>
    </div>
  );
}

export default App;
