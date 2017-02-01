import React, { Component } from 'react';
import {search_item,updateInputValue} from './actions';
import {connect} from 'react-redux';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		// console.log(state);
		this.state = {
			search_input: props.search_input
		}
	}

	render(){
		return (
			<div className="mdl-grid">
				<div className="mdl-textfield mdl-js-textfield">
	                <input 
	                	className="mdl-textfield__input" 
	                	type="text" id="query" pattern="[A-Z,a-z, ]*"
	                	onChange={this.props.onInputChange}
	                 />
	                <label className="mdl-textfield__label" for="query">Search</label>
	                <span className="mdl-textfield__error">Letters and Space only</span>
	            </div>
	            <button 
	            	className="mdl-button mdl-js-button mdl-button--raised" 
	            	id="search-btn"
	            	onClick={this.props.onSearchClick}>
                	Button
            	</button>
        	</div>
		);
	}
}

const mapStateToProps = (state)=>{
	console.log(this.props);
	return {
		search_input: state.search_input
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onSearchClick: ()=>{
			console.log(this.props.search_input);
			dispatch(search_item())
		},
		onInputChange: (e)=>{
			dispatch(updateInputValue(e.target.value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);