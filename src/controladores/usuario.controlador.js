import db from "../modelos/index.js"

const Usuario = db.usuario;

// POST : Crea un nuevo Profesor autorizado
export const crear = (req, res) => {

   // Crea el Profesor
    const usuario = new Usuario({
        ...req.body
    });

    // Guarda el Profesor en la base de datos
    usuario
        .save(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "ERROR: Se ha producido algun error mientras se creaba el usuario."
        });
    });
};

// GET : Login de un Profesor, Autenticación
export const login = (req, res) => {
    const {usuario, pass} = req.body;

    Usuario.find({usuario, pass})
        .then(data => {
            if(data.length) res.status(200).send();
            else res.status(400).send({
                message: "Usuario o contraseña incorrectos."
            });
        })
        .catch(err => {
        res.status(500).send({
            message: "ERROR: Se ha producido algun error mientras se obtenian los datos de usuario."
        });
    });
};