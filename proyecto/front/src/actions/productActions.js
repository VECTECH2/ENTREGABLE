
// importamos libreria que me permitira ejecutar 
import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    CLEAR_ERRORS,


    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

    
} from '../constants/productConstants';  //1 error



export const getProducts = () => async(dispatch)=>{
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        // ruta para ir por los productos
        // y lo que reciba lo guarda en esta variable data
        // esta informacion llega al front
        const {data} = await axios.get('api/productos')


        //y le decimos que esta sera la respuesta en pantalla
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })

        // y si no funciona ejecutamos lo siguiente
    }catch (error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Ver Detalle del Producto

export const getProductsDetails = (id) => async(dispatch)=>{
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST})

        // ruta para ir por los productos
        // y lo que reciba lo guarda en esta variable data`
        // esta informacion llega al front
        const {data} = await axios.get(`api/producto/:${id}`)


        //y le decimos que esta sera la respuesta en pantalla
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })

        // y si no funciona ejecutamos lo siguiente
    }catch (error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}