//ver mensaje
const producto=require("../models/products") 

// importamos fetch para trabajar desde consola
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));



    exports.getProducts=async (req,res,next) =>{

        const productos= await producto.find();
        if(!productos){
            return res.status(404).json({
                success:false,
                error:true })    
        }


        res.status(200).json({
            success:true,
            cantidad:productos.length,// con esto cuento cuantos productos tengo
            productos
  
        })
}




// ver un producto por id
//Crear producto appi/productos
 exports.newProducts=async(req,res,next)=>{ 
    const product=await producto.create(req.body) // 
    res.status(201).json({
        sucess:true,

        //y aqui le pasamos esl cuerpo que acabamos de crear 
        product
        // una ves finalizado debemos ir a rutas en products y crearsela para que funcione bien
    })
}



//Ver un producto por ID
exports.getProductById= async (req, res, next)=>{



    const product= await producto.findById(req.params.id)



    if (!product)

        {return res.status(404).json({
            success:false,message: "No encontramos ese producto",
            error:true
        })
            


        }
        res.status(200).json({
            success:true,
            message:"Aqui debajo encuentras información sobre tu producto: ",
            product}
            )
        }// ahora boy y le creo una ruta 




 //Update un producto
 exports.updateProduct= async (req,res,next) =>{
    let product= await producto.findById(req.params.id)
        if (!product){
            return res.status(404).json({
                success:false,
                message: 'No encontramos ese producto'})
            }

            product= await producto.findByIdAndUpdate(req.params.id, req.body, {
                new:true,
                runValidators:true
                });

                res.status(200).json({
                    success:true,message:"Producto actualizado correctamente",
                    product
                })
                } // luego de esto le creamos la ruta      

   
                
 //metodo para eliminar
 exports.deleteProduct= async (req,res,next) =>{
    const product= await producto.findById(req.params.id)

     //Variable de tipo modificable
     if (!product){ 
        
        //Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({ //Si el objeto no existe, return termina el metodo
            success:false,
            message: 'No encontramos ese producto'})
        }
        // eliminamos el proceso on la palabra poniendo el producto y remove
        // se utiliza remove para que ese campo no quede hay vacion y sea ocupado
        await product.remove();

        //Enviamos mensaje de quefue eliminado
        res.status(200).json({
            success:true,
            message:"Producto eliminado correctamente",
        }
        )}        
      
       



        