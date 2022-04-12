import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";


const reducer = combineReducers({
    cart:cartReducer
})

let initialState={
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ?
        JSON.parse(localStorage.getItem('cartItems'))
        :
        [],

        shipping_info: localStorage.getItem('shipping_info')?
        JSON.parse(localStorage.getItem('shipping_info')):
        {}
    }
}

const middleware =[thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)) )

export default store 