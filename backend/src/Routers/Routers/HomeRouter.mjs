'use strict'
// @ Importación de la clase Handlers, la cual contiene configuraciones del manejo de las rutas. 
import Handlers from "../Handlers/Handlers.mjs"
import HomeController from "../../Controllers/HomeController.mjs";

const HOME_CONTROLLER = new HomeController();

/* 
* @ class Home : Clase Home extiende de Handlers
* @ methods : Las funciones que hará la clase, por eje: (crear, listar, actualizar...)
* @ setupHome : Método principal que contendrá el resto de métodos para poder agregarlos a la ruta en app.mjs.
*/
class HomeRouter extends Handlers {
    constructor() {
        super();
    }
    setupHome() {
        this.home();
        this.test();
    }
    home() {
        this.get('/home', HOME_CONTROLLER.home);
    }
    test() {
        this.get('/test', HOME_CONTROLLER.test);
    }
}
// @ Exportación de la clase Home.
export default HomeRouter