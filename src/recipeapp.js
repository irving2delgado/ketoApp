import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './recipe.js';
import './recipeapp.css';
import NavBar from './navbar.js';
import RecipeInput from './recipeInput.js';
import RecipeList from './recipelist.js'

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
      {
        id: 1,
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://images.unsplash.com/photo-1445281835511-e2dd35fb0142?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04b082be7b19da8e420befe13b20f9f1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        id: 2,
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "https://images.unsplash.com/photo-1514919224949-507c703a3a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed697daf694d0ffcb11b8d0ac16b4484&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 3,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste why isnt this showing up lorem upsum this is too much text.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://images.unsplash.com/photo-1505149633703-f5ca7480b374?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7ffa2710dffa9dd7985257af274366c&auto=format&fit=crop&w=1350&q=80"
      }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <NavBar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;