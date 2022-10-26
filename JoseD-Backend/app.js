const express = require('express');

const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

const ventas = require('./routes/ventas');
const productos = require('./routes/productos');
const clientes = require('./routes/clientes');

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
app.use(cors({
    origin: '*'
}))


app.use('/api/ventas', ventas);
app.use('/api/productos', productos);
app.use('/api/clientes', clientes);

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'pagina no encontrada'
    });
});

module.exports = app;

