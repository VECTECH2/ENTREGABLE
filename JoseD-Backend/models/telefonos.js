const { Schema, model } = require("mongoose");

const telefonosSchema = Schema ({ 
    //id de los telefonos es un campo de validacion para otras colecciones
    idTelefonos: {
        type: String,
        unique: true
    },
    tipo: {
        type: String,
        enum: ["home", "fax"],
    },
    numero: {
        type: String,
    },
})

module.exports = model('telefonos', telefonosSchema)