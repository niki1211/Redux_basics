import { FETCH_ITEMS } from '../actions/types';

export const fetchItems = () => dispatch => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => 
                dispatch({
                    type: FETCH_ITEMS,
                    payload: data
            }));
}