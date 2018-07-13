import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './recipe.js';
import './recipeapp.css';
import NavBar from './navbar.js';
import RecipeList from './recipelist.js'

class recipeApp extends Component {
  render() {
    return (
      // <div>
      // <NavBar />
      // </div>

      <div className="App">
      <NavBar />
      <RecipeList />  
      </div>
    );
  }
}

export default recipeApp;
