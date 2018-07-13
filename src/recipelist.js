import React, {Component} from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipelist.css';

class RecipeList extends Component {
	static defaultProps = {
		 recipes: [
      {
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://images.unsplash.com/photo-1445281835511-e2dd35fb0142?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04b082be7b19da8e420befe13b20f9f1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "https://images.unsplash.com/photo-1514919224949-507c703a3a88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed697daf694d0ffcb11b8d0ac16b4484&auto=format&fit=crop&w=634&q=80"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://images.unsplash.com/photo-1505149633703-f5ca7480b374?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7ffa2710dffa9dd7985257af274366c&auto=format&fit=crop&w=1350&q=80"
      }
    ]
	}

	static PropTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	}
	render () {
		const recipes = this.props.recipes.map((r,index) => (
			<Recipe key={index} {...r} />
			));

		return (
		<div className='recipe-list'>
		{recipes}
		</div>
		)

	}
}

export default RecipeList;