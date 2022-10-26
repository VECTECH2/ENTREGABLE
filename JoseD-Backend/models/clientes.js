const { Schema, model } = require("mongoose");

const clientesSchema = Schema ({ 
    //"identificacion": "111111"
    identificacion: {
        type: Number,
        required: true,
        unique: true
    },
    //"apellido": "Perez"
    apellido: {
        type: String,
        required: true
    },
    //edad debe recibir "edad": "25"
    edad: {
        type: Number,
        required: true
    },
    //direccion viene desde direciones.js
    direccion: {
        type: String,
        required: true,
        path: 'direcciones'
    },
    //telefono viene desde telefonos.js
    telefono: {
        type: String,
        required: true,
        path: 'telefonos'
    },
    //nombre del cliente "nombre": "Juan"
    nombre: {
        type: String,
        required: true
    },
    //email del cliente "email": "
    correo: {
        type: String,
        required: true
    },
})

    
module.exports = model('clientes', clientesSchema)