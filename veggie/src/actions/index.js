import {SEARCH_ITEM,UPDATE_INPUT_VALUE} from '../constants';

export const search_item = (text)=>{
	return {
		type: SEARCH_ITEM,
		text
	}
}

export const updateInputValue = (text)=>{
	return {
		type: UPDATE_INPUT_VALUE,
		text
	}
}