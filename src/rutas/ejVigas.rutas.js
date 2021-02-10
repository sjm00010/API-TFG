import { Router } from "express";
import { crear, actualizar, borrar, buscar1, buscarTodos } from "../controladores/ejViga.controlador.js";

export default app => {
    const router = Router();
  
    // Crea un nuevo Ejercicio de tipo Viga
    router.post("/", crear);

    // Actualizar un Ejercicio de tipo Viga
    router.put("/:id", actualizar);

    // Borrar un Ejercicio de tipo Viga
    router.delete("/:id", borrar);
  
    // Login de un Profesor, Autenticación
    router.get("/:id", buscar1);

    // Login de un Profesor, Autenticación
    router.get("/", buscarTodos);
  
    app.use('/api/ejViga', router);
};