import bcryptjs from "bcryptjs"; /*librería para encriptar clave de usuario*/
import { redirect } from " express/lib/response";


const usuarios = [{   /*creación de usuario de prueba */
    user:"a",
    email:"a@a.com",
    password:"a"
}]

/*control de autenticación */
async function login(req,res){ /*request, response (solicitud y respuesta de html) */

}

async function register(req,res){/*request, response (solicitud y respuesta de html) */
console.log(req.body)
const user = req.body.user;
const password = req.body.password;
const email = req.body.email;
if(!user || !password ||!email){
    res.status(400).send({status:"Error",message:"Los campos están incompletos"})
}
const usuarioARevisar = usuarios.find(usuario => usuario.user === user)
if(usuarioARevisar){
    res.status(400).send({status:"Error",message:"Este usuario ya existe"})
} 
const salt = await bcryptjs.genSalt(5); /*proceso para alterar contraseña para ser usado en un solo proceso. el (5) es la cantidad de procesos, entre mas procesos mas seguridad pero se tarda mas en abrirse */
const hashPassword = await bcryptjs.hash(password,salt); /*hashPassword, es la contraseña que vamos a guardar en nuestro usuario */
const nuevoUsuario = {
    user, email, password: hashPassword
}
console.log(nuevoUsuario),/*para observar como se ve la clave criptográfica */
usuarios.push(nuevoUsuario);
res.status(201).send({status:"ok",message:'Usuario ${nuevoUsuario.user} agregado', redirect:"/"}) /*status(201) significa elemento creado. redirect--> una vez registrados nos lleva al inicio de nuestra pagina */

}

export const methods = {
    login,
    register
}