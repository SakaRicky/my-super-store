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

      

      <div className="container mt-3">
        <h2 class="text-center">Register</h2>
        <div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <label for="bio" class="form-label">
              Tell us about you
            </label>
            <textarea class="form-control" id="bio" rows="3"></textarea>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
