const mongoose = require("mongoose");

const esqueleto = mongoose.Schema({
    nombre:{
        type:String,
        require:[true,"campo obligatorio"]
    }
})

module.exports=mongoose.model("tablaPrueba",esqueleto)