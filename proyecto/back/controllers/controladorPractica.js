const tabla = require("../modelos/modelPractica");

async function metodoTabla(req,res,next){
        // ahora creamos una variable para la tabla
        const cuerpo = await tabla.create(req.body);

        res.status(200).json({
            mensaje:"creacion Exitosa",
            // ahora devolvemos el cuerpo
            cuerpo
        })
}

// ahora exportamos para poder utilizarlo
module.exports={metodoTabla}