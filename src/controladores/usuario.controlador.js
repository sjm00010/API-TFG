import db from "../modelos/index.js";
import bcrypt from "bcryptjs";

const Usuario = db.usuario;

// POST : Crea un nuevo Profesor autorizado
export const crear = (req, res) => {

   // Crea el Profesor
    const usuario = new Usuario({
        ...req.body
    });

    usuario.pass = bcrypt.hashSync(usuario.pass, 12);

    // Guarda el Profesor en la base de datos
    usuario
        .save(usuario)
        .then(() => {
            res.status(201);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "ERROR: Se ha producido algun error mientras se creaba el usuario."
        });
    });
};

// POST : Login de un Profesor, Autenticación
export const login = (req, res) => {
    res.status(200).send();
};

export const verificarAuth = (req, res, next) => {
    if(req.get('authorization')){
        const [usuario, pass] = (Buffer.from(req.get('authorization')?.split(' ').pop(), 'base64')).toString('utf-8').split(':');

        Usuario.findOne({usuario})
        .then(data => {
            if(data && bcrypt.compareSync(pass, data.pass)) next();
            else res.status(400).send({
                message: "Usuario o contraseña incorrectos."
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "ERROR: Se ha producido algun error mientras se obtenian los datos de usuario."
            });
        });
    }else{
        res.status(400).send({
            message: "No se proporcionaron correctamente las credenciales"
        });
    }
};