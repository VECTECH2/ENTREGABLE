/*para utilizar la variable que creamos en otra clase utilizamos esta sintaxis  */
const app=require("./app")
const connectDatabase=require("./config/database");

/*aqui seteamos el archivo de configuracion que importamos con nmi*/ 
const dotenv=require("dotenv");
/** y traemos el archivo de donde lo tenemos que esta en la siguiente 
 * ruta
 */
dotenv.config({path:'back/config/config.env'})


// aqui lo llamo
connectDatabase();
/*Creamos gracias app que lo trajimos del archivo app 
un metodo para que escuche al puerto que declaramos 
en la carpeta config

y le decimos luego que lo escuche y ponemos su sintaxis !process.env.PORT
este fue el que configuramos en confit 
luego le decimos como y que boy hacer con lo que escuche 

y aqui a la ves le decimos que la constante server sera igual a lo que 
nor regrese el metodo

=>{aqui llenamos el metodo y atrapamos este valor quebregresara y lo definimos
  `mensaje que veremos  ${process.env.PORT  aqui le decimos que nos 
traiga el puerto que establecimos en config y lo hacemos con esa sintaxis 
y port es lo que nos traera de alli pero lo ponemos tal cual lo copiamos osea
en este caso en mayusculas }}

process.env  ESTE ARCHIVO VIENE DE la constante dotenv que declaramos al inicio 
y le icimos las modificaciones necesarias luego de esto nos vamos al servidor y 
continuamos con la cofiguracion
para ejecutar y lo hacemos en la consola y le anotamos la ruta donde tenemos
nuestro archivo a ejecutar o en este caso el server
tener en cuenta en que carpeta estamos para empezar navegar hasta ella 
y ejecutar nuestro archivo */

const server=app.listen(process.env.PORT,() =>{
    console.log(`Servidor inicia en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

