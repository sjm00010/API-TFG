import mongoose from "mongoose";
import dbConfig from "../config/db.config.js";
import usuario from "./usuario.modelo.js";
import ejViga from "./ejViga.modelo.js";
import ejMohr from "./ejMohr.modelo.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuario = usuario(mongoose);
db.ejViga = ejViga(mongoose);
db.ejMohr = ejMohr(mongoose);

export default db;