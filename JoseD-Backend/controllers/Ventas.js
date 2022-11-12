const { request, response } = require('express')
const ventas = require('../models/Ventas')
const productos = require('../models/productos')
const clientes = require('../models/clientes')



//json de venta para crear
/*{   
    "idProducto": "GGOEAFKA087499",
    "fecha": "27/09/2022", 
    "idCliente": "111114",
    "idVenta": "123", 
    "valor": 35, 
    "confirmado": true,
    "cantidad": 2
} */

//obtener todas las ventas
const obtenerVentas = async (req = request, res = response) => {
    try{
        const ventasDB = await ventas.find()
        res.json({
            ok: true,
            ventas: ventasDB
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Error: ' + e
        })
    }
}

//crear la venta de acuerdo al json de arriba
const crearVenta = async (req = request, res = response) => {
    try{
        const data = req.body
        const venta = new ventas(data)
        //llamamos a ventas para ver si el idVenta ya existe
        const ventaDB = await ventas.findOne({idVenta: venta.idVenta})
        //si existe, no se puede crear
        if(ventaDB){
            return res.status(400).json({
                ok: false,
                msg: 'El idVenta ya existe'
            })
        }
        //llamamos a productos para ver si el idProducto existe
        const productoDB = await productos
            .findOne({idProducto: venta.idProducto})
        //si no existe, no se puede crear
        if(!productoDB){
            return res.status(400).json({
                ok: false,
                msg: 'El idProducto no existe'
            })
        }
        //llamamos a clientes para ver si la identificacion existe
        const clienteDB = await clientes
            .findOne({identificacion: venta.idCliente})
        //si no existe, no se puede crear
        if(!clienteDB){
            return res.status(400).json({
                ok: false,
                msg: 'El idCliente no existe'
            })
        }
        //si todo esta bien, se crea la venta
        await venta.save()
        res.json({
            ok: true,
            venta: venta
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Error: ' + e
        })
    }
}


        

    






//editar la venta
const editarVenta = async (req = request, res = response) => {
    const { id } = req.params
    const { _id, ...resto } = req.body
    const venta = await ventas.findByIdAndUpdate(id, resto)
    res.json(venta)
}

//obtener una venta por id
const obtenerVenta = async (req = request, res = response) => {
    const { id } = req.params
    const venta = await ventas.findById(id)
    res.json(venta)
}

//eliminar una venta por id
const eliminarVenta = async (req = request, res = response) => {
    const { id } = req.params
    const venta = await ventas.findByIdAndDelete(id)
    res.json(venta)
}




module.exports = {
    crearVenta,
    obtenerVentas,
    obtenerVenta,
    editarVenta,
    eliminarVenta
}