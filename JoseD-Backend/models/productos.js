const { Schema, model } = require("mongoose");

const productosSchema = Schema ({ 
    //se asigna un id "id": "GGOEAFKA087499"  este campo es de validacion para otras colecciones
    id: {
        type: String,
        required: true,
        unique: true
    },
    //url de la imagen "image": "https://www.lider.cl/catalogo/images/whiteLineIcon.svg"
    urlImage: {
        type: String,
        required: true
    },
    //nombre del producto "name": "Café Molido Líder 500g"
    nombre: {
        type: String,
        required: true
    },
    //descripcion del producto "description": "Café molido 100% arábica, de gran calidad y sabor. Ideal para preparar un rico café en casa."
    descripcion: {
        type: String,
        required: true
    },
    // caractistica debe recibir "caracteristica": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
    caracteristica: {
        type: String,
        required: true
    },
    //precio del producto "price": "1990"
    precio: {
        type: Number,
        required: true
    },
})

module.exports = model('productos', productosSchema)