
import {combineReducers} from "redux";
import  productsReducer  from "./productsReducer";
import selectedProductReducer from './selectedProductReducer';
import setCartReducer from './setCartReducer';

const reducers = combineReducers({
    allProducts : productsReducer,
    selectedProduct : selectedProductReducer,
    setCart : setCartReducer
});
    


export default reducers;