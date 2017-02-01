import {combineReducers} from 'redux';
import {SEARCH_ITEM, UPDATE_INPUT_VALUE} from '../constants';
// import search_item_reducer from './search_item_reducer';


const search_item_reducer = (state = {}, action)=>{
	if(action.type === SEARCH_ITEM){
		console.log("search item reducder");
		return state
	}
	return {}
}

const update_input_value = (state = {}, action)=>{
	if(action.type === UPDATE_INPUT_VALUE){
		console.log("update_input_value");
		return state
	}
	return {}
}

const allReducers = combineReducers({
	search_item_reducer,
	update_input_value
})

export default allReducers;