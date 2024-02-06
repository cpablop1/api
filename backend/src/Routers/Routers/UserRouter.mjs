'use strict'
// @ Importación de la clase Handlers, la cual contiene configuraciones del manejo de las rutas. 
import Handlers from "../Handlers/Handlers.mjs"
import UserController from "../../Controllers/UserController.mjs";

const USER_CONTROLLER = new UserController();

/* 
* @ class UserRouter : Clase UserRouter extiende de Handlers
* @ methods : Las funciones que hará la clase, por eje: (crear, listar, actualizar...)
* @ setupHome : Método principal que contendrá el resto de métodos para poder agregarlos a la ruta en app.mjs.
*/
class UserRouter extends Handlers {
    constructor() {
        super();
    }
    setupHome() {
        this.create();
    }
    create() {
        this.post('/user', USER_CONTROLLER.create);
    }
}
// @ Exportación de la clase UserRouter.
export default UserRouter