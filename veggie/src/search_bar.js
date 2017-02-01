import React, { Component } from 'react';
import {search_item,updateInputValue} from './actions';
import {connect} from 'react-redux';

class SearchBar extends Component {

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
	return {
		search_input: state.search_input
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		onSearchClick: ()=>{
			dispatch(search_item())
		},
		onInputChange: (e)=>{
			dispatch(updateInputValue(e.target.value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);