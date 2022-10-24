//variable mongoose me permite conexion a base de datos
const mongoose=require("mongoose");

const connectDatabase = () => {
    console.log("URI",process.env.DB_LOCAL_URI )
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlparser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Base de datos mongo conectada al servidor: ${con}`)
    }).catch(con =>{
        console.log("con",con)
        console.log(`no se logro la conexion con la base de Datos`)
    })
}

module.exports=connectDatabase;


//exports.getProducts