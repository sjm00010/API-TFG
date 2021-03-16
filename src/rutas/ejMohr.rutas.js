import { Router } from "express";
import { crear, actualizar, borrar, buscar1, buscarTodos } from "../controladores/ejMohr.controlador.js";
import { verificarAuth } from "../controladores/usuario.controlador.js";

export default app => {
    const router = Router();
  
    // Crea un nuevo Ejercicio de tipo Mohr
    router.post("/", verificarAuth, crear);

    // Actualizar un Ejercicio de tipo Mohr
    router.put("/:id", verificarAuth, actualizar);

    // Borrar un Ejercicio de tipo Mohr
    router.delete("/:id", verificarAuth, borrar);
  
    // Obtiene un ejercicio
    router.get("/:id", buscar1);

    // Obtiene los datos básicos de todos los ejercicios
    router.get("/", buscarTodos);
  
    app.use('/api/ejMohr', router);
};