import {ActionTypes} from '../constants/action-types'

const initialState = {cart : []};

const setCartReducer = (state = initialState, { type, payload }) => {
    switch(type){
       case  ActionTypes.SET_CART :
        return {...state, cart:payload};
        default :
        return state;

    }
}

export default setCartReducer;