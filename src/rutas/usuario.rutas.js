import { Router } from "express";
import { crear, login } from "../controladores/usuario.controlador.js";

export default app => {
    const router = Router();
  
    // Crea un nuevo Profesor autorizado
    router.post("/", crear);
  
    // Login de un Profesor, Autenticación
    router.get("/login", login);
  
    app.use('/api/usuario', router);
};