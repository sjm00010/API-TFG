import db from "../modelos/index.js"

const EjViga = db.ejViga;

// POST : Crea un nuevo Ejercicio de tipo Viga
export const crear = (req, res) => {

    // Crea el ejercicio
    const viga = new EjViga({
        ...req.body
    });

    // Guarda el ejercicio
    viga
        .save(viga)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
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
    
    EjViga.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
            res.status(404).send({
                message: `ERROR: No se pudo actualizar el Ejercicio de Vigas con id=${id}. Puede que no se haya encontrado el ejercicio.`
            });
            } else res.send({ message: "Ejercicio de vigas ha sido actualizado" });
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: No se pudo actualizar el Ejercicio con id=" + id
        });
    });
};

// DELETE : Borra un ejercicio
export const borrar = (req, res) => {
    const id = req.params.id;

    EjViga.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                message: `ERROR: No se pudo borrar el Ejercicio de Vigas con id=${id}. Puede que no se haya encontrado el ejercicio.`
                });
            } else {
                res.send({ message: "Ejercicio de vigas ha sido borrado" });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: No se pudo borrar el Ejercicio con id=" + id
        });
    });
};

// GET : Obtiene un ejercicio
export const buscar1 = (req, res) => {
    const id = req.params.id;

    EjViga.findById(id)
        .then(data => {
            if (!data)
            res.status(404).send({ message: "No se encontrol el Ejercicio con id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500).send({ 
            message: "ERROR: Fallo al recuperar el Ejercicio con id=" + id 
        });
    });
};

// GET : Obtiene todos los datos básicos de los ejercicios
export const buscarTodos = (req, res) => {  
    EjViga.find({}, {dificultad: 1, enunciado: 1, id: 1})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "ERROR: Ocurrio un error mientras se recuperaban los ejercicios de vigas"
        });
    });
};