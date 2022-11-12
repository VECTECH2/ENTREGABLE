const { Router } = require('express')

const { crearVenta, obtenerVentas, obtenerVenta,  editarVenta, 
    eliminarVenta } = require('../controllers/Ventas')

const router = Router()

//crear venta
router.post('/', crearVenta)
router.get('/', obtenerVentas)
router.get('/:id', obtenerVenta)
router.put('/:id',  editarVenta)
router.delete('/:id', eliminarVenta)
module.exports = router
