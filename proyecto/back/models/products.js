
/*nodejs es el back
 front lo trabajaremos con read
/** Entity entidad para los productos que quedaran en la tabla de mongo esta es la estructura */

/**ya con esta constante tenemos todos los recursos para hacer el crud */
const mongoose = require("mongoose")


/* esta primer linea es para que me diseñe mi estilo en tipo esquema 
y en cada variable que cree ponemos los requerimientos que necesitamos*/

const productosSchema = mongoose.Schema({
    nombre:{
        type:String,
        // mensaje de aviso 
        required:[true,"por favor rejistre el nombre del producto"],
        trim:true,
        maxLenght:[120,"el nombre del producto no debe exeder los 120 caracteres."]
    },

    precio:{
        type:Number,
        required:[true,"por favor rejistre el precio del producto es obligatorio"],
        // le establecemos el largo de la variable 
        maxLenght:[8,"El precion no puede superar 999999999"],
        default:0.0
    },

    descripcion:{
                        type:String,
                        required:[true,"Por favor rejistre la descripcion del producto"],  
                    },
                    calificacion:{
                        type:Number,
                        default:0
               },
    // trim elimina los caracteres en blanco al final de los textos 

    /**para determinar que algo es un arreglo utilizamos [] como lo hacemos en esta variable aqui
     * determinamos que nuestras imagenes seran un arreglo
     */
    imagen:[// una ves determinamos que sera un arreglo habrimos corchetes para darle sus caracteristicas 
                {
                    public_id:{ //con esto le ponemos un id a cada imagen
                                type:String,
                                required:true,
                              },
                    url:{//ponemos la url es la ruta donde encontrara esta imagen
                            type:String,
                            required:true
                        }
               }
           ],

    categoria:{
                type:String,
                required:[true,"seleccione la categoria del producto"],
                    
                    // lista Desplegable configuraciones
                    enum:{ // enum ennumera o da posiciones en el index
                            values:[
                            "mediano Cilindraje",
                            "alto Cilindraje",
                            "bajo Cilindraje",
                            "trabajo",
                            "todo Terreno"
                            ]
                        },
              },

    vendedor:{
        type:String,
        required:["por favor rejistre el vendedor del producto"]
    },

    inventario:{
        type:Number,
        required:[true,"por favor rejistre el nombre del producto"],
        maxLenght:[5,"no puede superar99999"],
        default:0
    },

    numCalificaciones:{
        type:Number,
        default:0
    },

    opiniones:[
                {
                    nombreDelCliente:{
                        type:String,
                        required:true
                    },
                    rating:{
                        type:Number,
                        require:true
                    },

                    comentario:{
                        type:String,
                        required:true
                    }

               }
            ],

    fechaCreacion:{
        type:Date,
        default:Date.now
    }   
})

/**lo exportamos para poder utilizarlo le damos un nombrd que 
 es con el que lo buscaremos afuera y le decimos la estructura de donde se alimentara 
 de aqui ba al controlado   r*/

module.exports=mongoose.model("productos",productosSchema)


