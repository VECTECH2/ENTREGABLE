const { Schema, model } = require("mongoose");

const direccionesSchema = Schema ({ 
    //calle del cliente "calle": "21 2nd Street"
    calle: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    localidad: {
        type: String,
        required: true,
    },
    codigo: {
        type: Number,
        required: true,
    },
})

module.exports = model('direcciones', direccionesSchema)