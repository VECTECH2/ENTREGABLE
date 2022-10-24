


// iniciamos importando todos los estados de Constants 
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,


    CLEAR_ERRORS} from "../constants/productConstants";


//Creamos un metodo para que me muestre todos los productos de la base de datos
//Este es como mi response: products: []
//con esto le digo que genere una accion: action
export const productsReducer = (state ={ products: []}, action)=>{

    // le pedimos que dependiendo del caso ejecute una accion
    switch(action.type){ // el suiche se alimenta de las acciones que importamos
        case ALL_PRODUCTS_REQUEST:
            return{
                loading:true, // CARGA

                 // esta vacio para si algo ocurre se llene 
                 // Esta variable debe coincider con la de mi modelo en el back
                productos:[] 
            }

        case ALL_PRODUCTS_SUCCESS:
            return{
                loading:false,// no necesita cargar por que en este punto ya los tendremos

                // carga a los productos 
                productos: action.payload.productos, 

                // cantidad carga la cantidad de productos que tenemos en el modelo
                cantidad: action.payload.cantidad
            }

        case ALL_PRODUCTS_FAIL:
            return{
                //mensaje de herror si algo succede
                loading:false,
                error: action.payload
            }


            // espera un estado 
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        
            // returna el estado que pase
        default:
            return state;
    }
}

// Despues de esto creamos una carpeta llamada acciones para 
// utilizar estos metodos



//REDUCCER PARA TENER LOS DETALLES
export const productDetailsReducer = (state ={ product:{}}, action)=>{

    // le pedimos que dependiendo del caso ejecute una accion
    switch(action.type){ // el suiche se alimenta de las acciones que importamos
        case PRODUCT_DETAILS_REQUEST:
            return{
              ...state,
              loading:true
            }

        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,// no necesita cargar por que en este punto ya los tendremos

                // carga a los productos 
                productos: action.payload.product, 

            }

        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }


            // espera un estado 
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        
            // returna el estado que pase
        default:
            return state;
    }
}