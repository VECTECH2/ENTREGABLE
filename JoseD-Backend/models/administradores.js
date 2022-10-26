const { Schema, model } = require("mongoose");


const administradoresSchema = Schema ({ 
    identificacion: {
        type: Number,
        required: [true, "la identificacion es necesaria"]
    },
    apellido: {
        type: String,
        required: true
    },
    edad:{
        type: Number, 
        required: true
    },
    direccion: {
        type: Schema.Types.ObjectId,
        ref: "direcciones",
        required: true
    },
    telefono: {
        type: Schema.Types.ObjectId,
        ref: "telefonos",
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    

})

module.exports = model('administradores', administradoresSchema)