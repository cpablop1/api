'use strict'
import app from './app.mjs' // @ Importamos el fichero app.mjs, la cual contiene las configuraciones necesarias para el servidor.
import Config from './Config/Config.mjs'; // # Impotación de las  configuraciones necesarias.
import Connection from './Models/Handlers/Connection.mjs'; // @ Importación para comprobar la conexión a la BD.
const CONN = new Connection();

CONN.testConnection().then((e) => {
    // @ Configuración del oyente de la API.
    if (e) {
        app.listen(Config.serverPort, () => {
            console.log('Running server 😀');
        });
    }
}).catch(() => {
    console.log('There was an error raising the server through the port: ', Config.serverPort);
}); 