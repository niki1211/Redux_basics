import {SET_ITEMS, SET_FILTERED_ITEMS } from '../actions/types';

const initialState = {
    items : [],
    filteredItems : [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_ITEMS : 
            return {
                ...state,
                items: action.payload
            }
        case SET_FILTERED_ITEMS :
            return {
                ...state,
                filteredItems: action.payload
            }
        default:
            return state;
    }
}