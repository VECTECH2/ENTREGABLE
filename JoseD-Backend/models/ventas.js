const { Schema, model } = require("mongoose");

const ventasSchema = Schema ({
    // "fecha": "27/09/2022"  
    fecha:{
        type: String,
        required: true
    },
    // viene desde identificacion en la tabla clientes y la columna identificacion
    idCliente:{
        type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: true
    },
    //"idVenta": "123",
    idVenta: {
        type: Number,
        require: true
    },
    // "valor": 35,
    valor: {
        type: Number,
        required: true
    },
    confirmado:{
        type: Boolean,
        default: true
    },
    idProducto: {
        type: Schema.Types.ObjectId,
        ref: 'productos',
        required: true
    },
    cantidad: {
        type: Number,
        require: true
    },
})

module.exports = model('ventas', ventasSchema)
