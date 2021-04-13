import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'

import './App.css';

import Home from './components/pages/home/Home'
import Deals from './components/pages/deals/Deals'
import Cart from './components/pages/cart/Cart'
import Item from './components/pages/item_page/Item'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
