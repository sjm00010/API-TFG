import mongoose from "mongoose";
import dbConfig from "../config/db.config.js";
import usuario from "./usuario.modelo.js";
import Viga from "./Viga.modelo.js";
import Matriz from "./Matriz.modelo.js";
import Mohr from "./Mohr.modelo.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.usuario = usuario(mongoose);
db.Viga = Viga(mongoose);
db.Matriz = Matriz(mongoose);
db.Mohr = Mohr(mongoose);

export default db;