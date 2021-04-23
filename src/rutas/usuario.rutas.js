import { Router } from "express";
import { crear, login, verificarAuth } from "../controladores/usuario.controlador.js";

export default app => {
    const router = Router();
  
    // Creación un nuevo docente autorizado, esta operación no es accesible desde la web y simplemente se utiliza para generar los usuarios al inicio. 
    // Será borrada en una futura actualización
    router.post("/", crear);
  
    // Autenticación de un docente
    router.get("/login", verificarAuth, login);
  
    app.use('/api/usuario', router);
};