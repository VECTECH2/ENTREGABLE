const { request, response } = require('express')
const ventas = require('../models/Ventas')

//json de venta para crear
// { "fecha": "27/09/2022", "idCliente": "111111", "idVenta": "123", "valor": 35, "confirmado": true,
// "idProducto": "GGOEAFKA087599",   "cantidad": 2 }

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

//crear la venta de acuerdo a la estructura del modelo de ventas
const crearVenta = async (req = request, res = response) => {
    try {
        const venta = new ventas(req.body)
        await venta.save()
        res.status(201).json({
            ok: true,
            venta
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            error
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
