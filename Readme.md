[ ![Seguidores](https://img.shields.io/github/followers/sjm00010?label=Seguir&style=social) ](https://github.com/sjm00010)
![Estrellas](https://img.shields.io/github/stars/sjm00010/API-TFG?label=Favoritos&style=flat-square)

# API WIPACE

Esta API JavaScript forma parte de la aplicación web [WIPACE](https://github.com/sjm00010/TFG) como parte de la administración de los ejercicios. Esta API permite realizar las operaciones CRUD con los elementos de la BBDD.

## Operaciones
La API se divide en dos partes claramente diferenciadas: *Identificación de usuarios* y *Gestión de ejercicios*. A continuación se detallarán las operaciones para cada una de las partes.

### Identificación de usuarios
Las operaciones **publicas** que se pueden realizar para la identificación de usuarios (*docentes*) son:

|  Tipo  |         URL          | Respuesta | Descripción |
| ------ | -------------------- | --------- | ----------- | 
| `POST` | /api/usuario/login | `OK(200)` | Verifica las credenciales dadas por el usuario |

### Gestión de ejercicios
Las operaciones que se pueden realizar para la gestión de ejercicios se son las mismas para cada *tipo* de ejercicio (`viga`, `matriz`, `mohr`):

|  Tipo  |             URL            | Req. autenticación | Respuesta | Descripción |
| ------ | -------------------------- | :---------: | --------- | ----------- | 
| `POST` | /api/ejercicio/*tipo* | ✔ | `CREATED(201)`, ID del nuevo ejercicio | Creación de un ejercicio a partir de la información suministrada en el cuerpo de la petición |
| `PUT` | /api/ejercicio/*tipo*/{id} | ✔ | `OK(200)` | Actualización del ejercicio indicado por el ID con la información suministrada en el cuerpo de la petición |
| `GET` | /api/ejercicio/*tipo* | ❌ | `OK(200)`, Vector con la info. básica de cada ejercicio | Obtención de la información básica (*ID*, *enunciado* y *dificultad*) de cada ejercicio |
| `GET` | /api/ejercicio/*tipo*/{id} | ❌ | `OK(200)`, Ejercicio | Obtención de la información de un ejercicio |
| `DELETE` | /api/ejercicio/*tipo*/{id} | ✔ | `OK(200)` | Borrado del ejercicio indicado por el ID |

## Instalación
Antes de comenzar el proceso de instalación es necesario tener instalado el software necesario que aparece en el siguiente apartado.

### Requisitos previos
La API utiliza [Express](https://expressjs.com/es/) para la comunicación con la aplicación web, por lo tanto será necesario tener instalado [Node.js](https://nodejs.org/es/download/) (para la realización se utilizó la versión 14.15.1 de 64 bits) que servirá de paso para la ejecución de la API. Se puede instalar [Node.js](https://nodejs.org/es/download/) en [Windows](https://guru99.es/download-install-node-js/) y en [Linux](https://www.hostinger.es/tutoriales/instalar-node-js-ubuntu/).

Además, es necesario tener instalada la BBDD [MongoDB](https://www.campusmvp.es/recursos/post/VIDEO-Instalacion-paso-a-paso-de-MongoDB-en-Windows-y-Linux.aspx), en este caso se utilizó [MongoDB Community Server](https://www.mongodb.com/try/download/community) en su versión 4.4.4. 

### HTTPS
Si no se desea utilizar HTTPS o no se disponen de los certificados pertinentes es necesario desactivar el CORS del archivo *serve.js*, sustituyendo:
```
const corsOptions = {
  origin: "https://wipace.ujaen.es"
};

app.use(cors(corsOptions));
```

por

```
app.use(cors());
```

### Instalación y configuración
Una vez instalado todo lo necesario para el correcto funcionamiento de la API, se deben seguir los siguientes pasos por orden:

1. **Clonar o descargar el repositorio**: para la [clonación](https://git-scm.com/book/es/v2/Fundamentos-de-Git-Obteniendo-un-repositorio-Git#:~:text=Si%20deseas%20obtener%20una%20copia,en%20vez%20de%20%22checkout%22.) es necesario usar [Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git), si se desea también se puede descargar el código directamente. Solo serán necesarios el archivo `package.json` y la carpeta *src*.

2. **Instalación de las dependencias**: tras obtener el repositorio es necesario instalar las dependencias para que este funcione correctamente. Para ello será necesario generar la carpeta `node_modules` mediante la ejecución del siguiente comando `npm install` en la raíz del código descargado.

3. **Automatización** (*opcional*): este paso es opcional, aunque muy recomendable si se quiere montar un servidor y no estar abriendo la API manualmente. Tras la realización del paso 2 se pueden mover la carpeta donde se encuentre la API donde se desee (si no se había hecho previamente). Tras los cual podemos automatizar el proceso de apertura de la API, en este caso mediante la creación de un sencillo script (para [Windows](https://www.downloadsource.es/como-crear-archivo-bat-para-ejecutar-comandos-en-cmd-automaticamente-windows/n/8520/) y [Linux](https://computernewage.com/2019/03/09/scripting-linux-bash-ejecutar-script-arranque/)), donde hay que cambiar *Ruta_de_la_API* por la ubicación que hayas elegido.

```
cd Ruta_de_la_API
set PORT=8081
npm start
```

4. **Ejecución de la API**: si has seguido todos los pasos solo tendrás que ejecutar el script creado en el paso 3. Si no, en la ruta de la API abriremos una consola y ejecutaremos el comando `npm start`. Si todo salió bien, en la consola debería aparecer la URL donde se está ejecutando la API.