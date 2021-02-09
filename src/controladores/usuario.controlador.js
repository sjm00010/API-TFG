const db = require("../modelos");
const Usuario = db.usuario;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    // Validate request
    if (!req.body.usuario || !req.body.pass) {
        res.status(400).send({ message: "Se deben pasar datos válidos" });
        return;
    }

   // Create a Tutorial
    const usuario = new Usuario({
        usuario: req.body.usuario,
        pass: req.body.pass
    });

    // Save Tutorial in the database
    usuario
        .save(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Algun error ha occurrido mientras se creaba el usuario."
        });
    });
};

// Retrieve all Tutorials from the database.
exports.login = (req, res) => {
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
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};