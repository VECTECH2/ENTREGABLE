const clientes = require('../models/clientes')
const direcciones = require('../models/direcciones')
const telefonos = require('../models/telefonos')

const { request, response } = require('express')

//Para crear un cliente se envia el siguiente JSON:
// { "identificacion": "111111", "apellido": "Smith", "edad": "34",
//* "dirección":  { "calle": "21 2nd Street", "ciudad": "New York", "localidad": "NY", "codigo postal": "10021" },
//* "telefono": [{ "tipo": "home", "numero": "212 555-1234" }, { "tipo": "fax", "numero": "646 555-4567" } ],
//* "nombre": "John", "correo": "ja@prueba.com" }

//obtener todos los clientes
const obtenerClientes = async (req = request, res = response) => {
    try{
        const clientesDB = await clientes.find()
        res.json({
            ok: true,
            clientes: clientesDB
        })
    }   catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Error: ' + e
        })
    }
}



//crear el cliente
const crearCliente = async (req = request, res = response) => {
    try{
        const data = req.body
        //declaramos los objetos direccion para recibir el objeto direccion del body
        const direccion = new direcciones(data.direccion)
        //declaramos los objetos telefono para recibir el objeto telefono del body
        const telefono = new telefonos(data.telefono)
        //declaramos el objeto cliente para recibir el objeto cliente del body
        const cliente = new clientes(data)
        //guardamos los objetos direccion y telefono en la base de datos
        await direccion.save()
        await telefono.save()
        //guardamos el objeto cliente en la base de datos
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
    const { id } = req.params
    const cliente = await clientes.findById(id)
    res.json(cliente)
}

//actualizar un cliente por id
const editarCliente = async (req = request, res = response) => {
    const { id } = req.params
    const { _id, ...resto } = req.body
    const cliente = await clientes.findByIdAndUpdate(id, resto)
    res.json(cliente)
}



//eliminar un cliente por id
const eliminarCliente = async (req = request, res = response) => {
    const { id } = req.params
    const cliente = await clientes.findByIdAndDelete(id)
    res.json(cliente)
}


module.exports = {
    crearCliente,
    obtenerClientes,
    obtenerCliente,
    editarCliente,
    eliminarCliente
}

    
    
