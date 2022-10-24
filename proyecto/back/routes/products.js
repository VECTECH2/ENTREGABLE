//Traemos LibreriaExpres
const express=require("express")

//Sacamos de la libreria metodo para crear rutas
const router=express.Router();


//Traemos la respuesta json desde el controlador
const {   getProducts,
          newProducts,
          getProductById,
          updateProduct,
          deleteProduct, } = require("../controllers/productsControllers") 


router.route("/productos").get(getProducts)//ruta para Ver los productos
router.route("/producto/nuevo").post(newProducts);//ruta para crear productos
router.route("/producto/:id").get(getProductById) //creo ruta a buscar por id
router.route("/producto/:id").delete(deleteProduct)



router.route("/producto/:id").put(updateProduct)//creo ruta para el metodo de actualizar 


//lo exportamos para que el archivo apps lo tenga 
module.exports=router


