import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './navbar.css';

class NavBar extends Component{
	static defaultProps = {
		onNewRecipe() {}
	  }
	  
	  static propTypes = {
		onNewRecipe: PropTypes.func
	  }
	  
	render() {
		return (
			<header>
				<h2><a>Keto Recipes</a></h2>
				<nav>
				<li><a onClick={this.props.onNewRecipe}>New Player</a></li>
					<li><a>Home</a></li>
					<li><a>About</a></li>
					<li><a>Contact Us</a></li>
				</nav>
			</header>
			);
	}
}

export default NavBar;