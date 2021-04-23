import { Router } from "express";
import { verificarAuth } from "../controladores/usuario.controlador.js";
import * as viga from "../controladores/Viga.controlador.js";
import * as matriz from "../controladores/Matriz.controlador.js";
import * as mohr from "../controladores/Mohr.controlador.js";

// Rutas del API para los ejercicios
export default app => {
    const router = Router();

    // Creación de un nuevo ejercicio
    router.post("/viga", verificarAuth, viga.crear);
    router.post("/matriz", verificarAuth, matriz.crear);
    router.post("/mohr", verificarAuth, mohr.crear);

    // Actualización de un ejercicio
    router.put("/viga/:id", verificarAuth, viga.actualizar);
    router.put("/matriz/:id", verificarAuth, matriz.actualizar);
    router.put("/mohr/:id", verificarAuth, mohr.actualizar);

    // Borrado de un ejercicio
    router.delete("/viga/:id", verificarAuth, viga.borrar);
    router.delete("/matriz/:id", verificarAuth, matriz.borrar);
    router.delete("/mohr/:id", verificarAuth, mohr.borrar);
  
    // Obtención de un ejercicio
    router.get("/viga/:id", viga.buscar1);
    router.get("/matriz/:id", matriz.buscar1);
    router.get("/mohr/:id", mohr.buscar1);

    // Obtención de los datos básicos un ejercicio
    router.get("/viga", viga.buscarTodos);
    router.get("/matriz", matriz.buscarTodos);
    router.get("/mohr", mohr.buscarTodos);
  
    app.use('/api/ejercicio', router);
};