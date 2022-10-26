const { Schema, model } = require("mongoose");

const telefonosSchema = Schema ({ 
    tipo: {
        type: String,
        enum: ["home", "fax"],
    },
    numero: {
        type: String,
    },
})

module.exports = model('telefonos', telefonosSchema)