const clientes = require('../models/clientes')
const direcciones = require('../models/direcciones')
const telefonos = require('../models/telefonos')

const { request, response } = require('express')

//obtener todos los clientes de la base de datos
const obtenerClientes = async (req = request, res = response) => {
    try {
        const clientesDB = await clientes.find();
        const direccionesDB = await direcciones.find();
        const telefonosDB = await telefonos.find();
        const clientesArray = [];
        clientesDB.forEach(cliente => {
            const clienteObj = {
                idClientes: cliente.idClientes,
                identificacion: cliente.identificacion,
                apellido: cliente.apellido,
                edad: cliente.edad,
                direccion: 
                    direccionesDB.find(direccion => direccion._id.toString() === cliente.direccion.toString()),
                telefono: 
                    telefonosDB.find(telefono => telefono._id.toString() === cliente.telefono.toString()),
                nombre: cliente.nombre,
                correo: cliente.correo,
            }
            clientesArray.push(clienteObj);
        });
        res.json({
            clientes: clientesArray
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}

        
//crear el cliente
const crearCliente = async (req = request, res = response) => {
    try{
        const data = req.body
        const direccion = data.direccion
        const telefono = data.telefono
        const cliente = new clientes(data)
        const direccionDB = await direcciones.create(direccion)
        const telefonoDB = await telefonos.create(telefono)
        cliente.direccion = direccionDB._id
        cliente.telefono = telefonoDB._id
        await cliente.save()
        res.json({
            ok: true,
            cliente: cliente
        })
    }   catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Error: ' + e
        })
    }
}


//obtener un cliente por id
const obtenerCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const clienteDB = await clientes.findById(id);
        const direccionDB = await direcciones.findById(clienteDB.direccion);
        const telefonoDB = await telefonos.findById(clienteDB.telefono);
        const clienteObj = {
            idClientes: clienteDB.idClientes,
            identificacion: clienteDB.identificacion,
            apellido: clienteDB.apellido,
            edad: clienteDB.edad,
            direccion: direccionDB,
            telefono: telefonoDB,
            nombre: clienteDB.nombre,
            correo: clienteDB.correo,
        }
        res.json({
            cliente: clienteObj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}


//actualizar un cliente por id
const editarCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const data = req.body
        const direccion = data.direccion
        const telefono = data.telefono
        const clienteDB = await clientes.findById(id);
        const direccionDB = await direcciones.findById(clienteDB.direccion);
        const telefonoDB = await telefonos.findById(clienteDB.telefono);
        const clienteObj = {
            idClientes: clienteDB.idClientes,
            identificacion: clienteDB.identificacion,
            apellido: clienteDB.apellido,
            edad: clienteDB.edad,
            direccion: direccionDB,
            telefono: telefonoDB,
            nombre: clienteDB.nombre,
            correo: clienteDB.correo,
        }
        const cliente = await clientes.findByIdAndUpdate(id
            , data
            , {new: true})
        const direccionDB2 = await direcciones.findByIdAndUpdate
            (clienteDB.direccion
            , direccion
            , {new: true})
        const telefonoDB2 = await telefonos.findByIdAndUpdate
            (clienteDB.telefono
            , telefono
            , {new: true})
        res.json({
            cliente: cliente
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}


//eliminar un cliente por id
const eliminarCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const clienteDB = await clientes.findById(id);
        const direccionDB = await direcciones.findById(clienteDB.direccion);
        const telefonoDB = await telefonos.findById(clienteDB.telefono);
        const clienteObj = {
            idClientes: clienteDB.idClientes,
            identificacion: clienteDB.identificacion,
            apellido: clienteDB.apellido,
            edad: clienteDB.edad,
            direccion: direccionDB,
            telefono: telefonoDB,
            nombre: clienteDB.nombre,
            correo: clienteDB.correo,
        }
        await clientes.findByIdAndDelete(id)
        await direcciones.findByIdAndDelete(clienteDB.direccion)
        await telefonos.findByIdAndDelete(clienteDB.telefono)
        res.json({
            cliente: clienteObj
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
}


module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerCliente,
    editarCliente,
    eliminarCliente
}

    
    