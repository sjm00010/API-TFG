import db from "../modelos/index.js"

const EjMatriz = db.Matriz;

// POST : Crea un nuevo ejercicio
export const crear = (req, res) => {

    // Crea el ejercicio
    const matriz = new EjMatriz({
        ...req.body
    });

    // Guarda el ejercicio
    matriz
        .save(matriz)
        .then(data => {
            res.status(201).send(data.id);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send({
            message: "ERROR: Se ha producido algun error mientras se creaba el ejercicio."
        });
    });
};

// PUT : Actualiza un ejercicio
export const actualizar = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "ERROR: Se deben suministrar datos"
        });
      }
    
    const id = req.params.id;
    
    EjMatriz.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `ERROR: No se pudo actualizar el ejercicio matricial con id=${id}. Puede que no se haya encontrado el ejercicio.`
            });
            } else res.send({ message: "Ejercicio matricial ha sido actualizado" });
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: No se pudo actualizar el ejercicio con id=" + id
        });
    });
};

// DELETE : Borra un ejercicio
export const borrar = (req, res) => {
    const id = req.params.id;

    EjMatriz.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                message: `ERROR: No se pudo borrar el ejercicio matricial con id=${id}. Puede que no se haya encontrado el ejercicio.`
                });
            } else {
                res.send({ message: "Ejercicio matricial ha sido borrado" });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: No se pudo borrar el ejercicio con id=" + id
        });
    });
};

// GET : Obtiene un ejercicio
export const buscar1 = (req, res) => {
    const id = req.params.id;

    EjMatriz.findById(id)
        .then(data => {
            if (!data)
            res.status(404).send({ message: "No se encontrar el ejercicio con id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ 
            message: "ERROR: Fallo al recuperar el ejercicio con id=" + id 
        });
    });
};

// GET : Obtiene todos los datos básicos de los ejercicios
export const buscarTodos = (req, res) => {  
    EjMatriz.find({}, {dificultad: 1, enunciado: 1, id: 1})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: Ocurrio un error mientras se recuperaban los ejercicios matriciales"
        });
    });
};