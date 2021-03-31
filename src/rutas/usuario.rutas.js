import { Router } from "express";
import { crear, login, verificarAuth } from "../controladores/usuario.controlador.js";

export default app => {
    const router = Router();
  
    // Crea un nuevo Profesor autorizado (BORRAR)
    router.post("/", crear);
  
    // Autenticación de un profesor
    router.get("/login", verificarAuth, login);
  
    app.use('/api/usuario', router);
};