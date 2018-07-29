import React, {Component} from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipelist.css';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	}
	render () {
		console.log(this.props);
		const recipes = this.props.recipes.map((r,index) => (
			<Recipe key={r.id} {...r} />
			));

		return (
		<div className='recipe-list'>
		
		{recipes}
		
		</div>
		)

	}
}

export default RecipeList;