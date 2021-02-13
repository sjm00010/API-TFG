import { Router } from "express";
import { crear, login, verificarAuth } from "../controladores/usuario.controlador.js";

export default app => {
    const router = Router();
  
    // Crea un nuevo Profesor autorizado
    router.post("/", crear);
  
    // Login de un Profesor, Autenticación
    router.post("/login", verificarAuth, login);
  
    app.use('/api/usuario', router);
};