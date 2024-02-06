'use sctric'
import express from 'express'; // @ Importamos librería express para la configuacion del servidor.
import bodyParser from 'body-parser'; // @ Importamos la librería body-parser para limpiar datos que vienen por rutas.
import morgan from 'morgan'; // @ Librería para mostrar información en terminal, por ejemplo (GET /test/test 304 3.972 ms - -).
import HomeRouter from './Routers/Routers/HomeRouter.mjs'; // @ Importación de la clase Home.
import TestRouter from './Routers/Routers/TestRouter.mjs'; // @ Importación de la clase Test.
import UserRouter from './Routers/Routers/UserRouter.mjs'; // @ Importación de la clase User.

const app = express(); // @ Constante app para guardar la librería express.

// @Cargar archivos rutas
const HOME_ROUTER = new HomeRouter();
const TEST_ROUTER = new TestRouter();
const USER_ROUTER = new UserRouter();
// @ Obtener el conjunto de rutas de cada clase.
HOME_ROUTER.setupHome();
TEST_ROUTER.setupTest();
USER_ROUTER.setupHome();

// @Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// @Configuración de cabeceras y CORS

// @
app.use(morgan('dev'));
// @Rutas
app.use('/home', HOME_ROUTER.router);
app.use('/test/', TEST_ROUTER.router);
app.use('/user', USER_ROUTER.router);

// @ Exportación de este script😉
export default app;