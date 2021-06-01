import { SET_ITEMS, SET_FILTERED_ITEMS } from '../actions/types';

export const setItems = (data) => dispatch => {
    console.log(data)
    dispatch({
        type: SET_ITEMS,
        payload: data
})}

export const setFilteredItems = (data) => dispatch => {
    console.log(data)
    dispatch({
        type: SET_FILTERED_ITEMS,
        payload: data
})}