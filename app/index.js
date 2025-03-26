import express from "express";
//fix para __direname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname (fileURLToPath(import.meta.url));//se podrá ver lo que hago en el repositorio de gibhub
import { methods as authentication} from "./controllers/authentication.controller.js";

//server
const app = express(); //CARGO INSTANCIA DE EXPRESS
app.set("port",4000); // puerto que voy a crear para despues usarlo
app.listen(app.get("port")); //express escucha el puerto
console.log("servidor corriendo en puerto",app.get("port"));//mostrar en pantalla el puerto

//configuración
app.use(express.static(__dirname + "/public"));//dirección estática (se sirven sin ninguna modificación)
app.use(express.json());


//Rutas
app.get("/", (req,res)=>res.sendFile(__dirname + "/pages/login.html"))
app.get("/register", (req,res)=>res.sendFile(__dirname + "/pages/register.html"))
app.get("/admin", (req,res)=>res.sendFile(__dirname + "/pages/admin/admin.html"))
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);


