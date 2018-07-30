import React, {Component} from 'react';
import Recipe from './recipe';
import PropTypes from 'prop-types';
import './recipelist.css';

class RecipeList extends Component {
	constructor(props){
		super(props)
		
	};
	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
		results: PropTypes.array
	};
	
	render () {
		// person.defaultProps = {
		// 	results: []
		// }
		console.log(this.props);
		const recipes = this.props.recipes.map((r,index) => (
			<Recipe key={r.id} {...r} />
			));
		
		
		return (
		<div className='recipe-list'>
		
		{recipes}
		{/* {person} */}
		</div>
		)

	}
}

export default RecipeList;