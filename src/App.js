import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar'
import SearchBar from './components/searchbar/searchbar'

import './App.css';

import Home from './components/pages/home'
import Deals from './components/pages/deals'
import Cart from './components/pages/cart'

const App = () => {
  return (
    <div>
      
      <Router>
        <Navbar />
        <SearchBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/deals' component={Deals} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
