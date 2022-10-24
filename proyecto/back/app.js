



const express=require("express")
const app = express();
app.use(express.json()) // le decimos que app utilizara todos los recursos que la libreria expres ofrece
                            // esto es para cuando le lleguen datos tipo json los utilize

                            
const productos=require("./routes/products")     

app.use('/api',productos)                           
module.exports=app;
