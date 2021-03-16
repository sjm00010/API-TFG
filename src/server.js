import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import db from "./modelos/index.js";
import usuarioRutas from "./rutas/usuario.rutas.js";
import vigaRutas from "./rutas/ejVigas.rutas.js";

const app = express();
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch(err => {
    console.log("ERROR : No se puede establecer la conexion con la base de datos.");
    console.log("Asegurese que la base de datos esta en ejecución y lance de nuevo la aplicación.");
    process.exit();
  });

const corsOptions = {
  origin: "http://lachimba.ujaen.es"
};

app.use(cors());//corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta simple, para saber si el API esta activa
app.get("/api", (req, res) => {
  res.json({ message: "Bienvenido a la API." });
});

// Importo las funciones del API
usuarioRutas(app);
vigaRutas(app);

// Establece el puerto de escucha del API
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`La API esta ejecutandose en http://localhost:${PORT}`);
});