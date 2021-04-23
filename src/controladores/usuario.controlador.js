import db from "../modelos/index.js";
import bcrypt from "bcryptjs";

const Usuario = db.usuario;

/**
 * POST : Creación de un nuevo docente
 * Esta operación no es accesible esta operación no es accesible desde la web y simplemente se utiliza para generar los usuarios al inicio. Será borrada en una futura actualización.
 * @param {*} req Petición
 * @param {*} res Respuesta
 */
export const crear = (req, res) => {
    const usuario = new Usuario({
        ...req.body
    });

    usuario.pass = bcrypt.hashSync(usuario.pass, 12);

    usuario
        .save(usuario)
        .then(() => {
            res.status(201).send();
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "ERROR: Se ha producido algun error mientras se creaba el usuario."
        });
    });
};

/**
 * POST : Login de un docente (Autenticación)
 * @param {*} req Petición (NO SE UTILIZA)
 * @param {*} res Respuesta
 */
export const login = (req, res) => {
    res.status(200).send();
};

/**
 * Funcion que autentica las credenciales suministradas
 * @param {*} req Petición
 * @param {*} res Respuesta
 * @param {*} next Siguiente función a ejecutar
 */
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