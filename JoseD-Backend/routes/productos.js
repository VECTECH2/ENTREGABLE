const { Router } = require('express')

const { crearProducto, obtenerProductos, obtenerProducto,  editarProducto, eliminarProducto } = require('../controllers/Productos')

const router = Router()

//crear producto
router.post('/', crearProducto)
//obtener todos los productos
router.get('/', obtenerProductos)
//obtener un producto
router.get('/:id', obtenerProducto)
//actualizar un producto
router.put('/:id',  editarProducto)
//eliminar un producto
router.delete('/:id', eliminarProducto)

module.exports = router