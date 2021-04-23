import express from "express";
import cors from "cors";

import db from "./modelos/index.js";
import usuarioRutas from "./rutas/usuario.rutas.js";
import ejerciciosRutas from "./rutas/ejercicios.rutas.js";

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
  origin: "https://wipace.ujaen.es"
};

app.use(cors(corsOptions));
app.use(express.json());

// Ruta de bienvenida al API
app.get("/api", (req, res) => {
  res.json({ message: "Bienvenido a la API." });
});

// Importo las funciones del API
usuarioRutas(app);
ejerciciosRutas(app);

// Establece el puerto de escucha del API
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`La API esta ejecutandose en http://localhost:${PORT}`);
});