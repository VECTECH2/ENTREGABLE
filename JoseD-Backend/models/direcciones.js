const { Schema, model } = require("mongoose");

const direccionesSchema = Schema ({ 
    //id de las direcciones "id": "GGOEAFKA087499"  este campo es de validacion para otras colecciones
    idDirecciones: {
        type: String,
        unique: true,
    },
    calle: {
        type: String  
    },
    ciudad: {
        type: String
    },
    localidad: {
        type: String
    },
    codigo: {
        type: Number
    },
})

module.exports = model('direcciones', direccionesSchema)