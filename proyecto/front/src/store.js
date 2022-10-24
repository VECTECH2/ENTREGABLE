
//Reductor de codigo y me merma muchos procesos que no necesitamos ver o llenarnos




//-----applyMiddleware: softwar intermedio ayuda a consumir recursos 
//____combineReducers: para mermar el codigo
import { createStore, combineReducers, applyMiddleware} from 'redux';

//import thunk : toca y espera una respuesta como informacion
import thunk from 'redux-thunk';

//import { composeWithDevTools:lo usamos para poder ver respuestas en pantalla 
import { composeWithDevTools} from 'redux-devtools-extension';

import { productsReducer,productDetailsReducer } from './reducer/productReducer';

//
const reducer= combineReducers ({
    products:productsReducer,
    productDetails:productDetailsReducer
})


//variable tipo let por que permite modificar el tipo de variable 
// pero no se puede volver a declarar
let initialState = {}


//variable que me devuelve lo que haga la ejecucion que hace el [thunk]
const middleware= [thunk]

// tienda que tiene el cumulo de todo lo que acabamos de crear
const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store;