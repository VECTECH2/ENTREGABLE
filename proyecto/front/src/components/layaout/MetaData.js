
// Esto lo creamos para que el titulo de nuestra pestaña de titulos cambie 
// esto lo relacionamos o importamos en Home.js donde tengo la parte grafica 

import React from 'react'  

import {Helmet} from 'react-helmet'

// creamos metodo que recibe un titulo
const MetaData = ({title}) => {

    // el cual recibira una variable 
    // con el titulo dependiendo de la pagina
    return(
        <Helmet>
            
            <title>{`${title} - Motors`}</title>
        </Helmet>
    )

}

// exportamos para poder utilizarlo en Home.js
export default MetaData


// una ves creado esto nos vamos al index,js e importamos 2 recursos nuevos 