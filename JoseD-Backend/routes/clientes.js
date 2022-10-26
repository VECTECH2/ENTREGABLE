const { Router } = require('express')

const { crearCliente, obtenerClientes, obtenerCliente,  
    editarCliente, eliminarCliente } = require('../controllers/Clientes')

const router = Router()

router.post('/', crearCliente)
router.get('/', obtenerClientes)
router.get('/:id', obtenerCliente)
router.put('/:id',  editarCliente)
router.delete('/:id', eliminarCliente)

module.exports = router
