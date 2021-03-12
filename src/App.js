import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'

import './App.css';

import Home from './components/pages/home/Home'
import Deals from './components/pages/deals/Deals'
import Cart from './components/pages/Cart'
import Item from './components/pages/item_page/Item'

const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/deals'>
            <Deals />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/item/:id'>
            <Item />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
