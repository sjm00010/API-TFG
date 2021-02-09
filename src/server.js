const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./modelos");

const app = express();
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch(err => {
    console.log("ERROR : No se puede establecer la conexion con la base de datos.");
    console.log("Asegurese que la base de datos esta en ejecucion y lance de nuevo la aplicación.");
    console.log(err);
    process.exit();
  });

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API." });
});

require("./rutas/usuario.rutas")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`La API esta ejecutandose en http://localhost:${PORT}`);
});