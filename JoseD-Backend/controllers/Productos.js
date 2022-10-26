const productos = require('../models/productos')
const { request, response } = require('express')

//crear producto de acuerdo a la estructura del modelo
const crearProducto = async (req = request, res = response) => {
    try {
        const producto = new productos(req.body)
        await producto.save()
        res.status(201).json({
            ok: true,
            producto
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            error
        })
    }
}




//obtener productos
const obtenerProductos = async (req = request, res = response) => {
    try {
        const productosDB = await productos.find()
        res.status(200).json({
            productos: productosDB
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: error,
        })
    }
}


//obtener producto por id
const obtenerProducto = async (req = request, res = response) => {
    const { id } = req.params
    try {
        const producto = await productos.findById(id)
        res.status(200).json({
            ok: true,
            error
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: error,
        })
    }
}

//editar producto
const editarProducto = async (req = request, res = response) => {
    const { id } = req.params
    try {
        const producto = await productos.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            ok: true,
            producto
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

//eliminar producto
const eliminarProducto = async (req = request, res = response) => {
    const { id } = req.params
    try {
        const producto = await productos.findByIdAndDelete(id)
        res.status(200).json({
            ok: true,
            producto
        })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}

module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    editarProducto,
    eliminarProducto
}
