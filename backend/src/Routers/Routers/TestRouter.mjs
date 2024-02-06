'use strict'
// @ Importación de la clase Handlers, la cual contiene configuraciones del manejo de las rutas. 
import Handlers from "../Handlers/Handlers.mjs"
import TestController from "../../Controllers/TestController.mjs";

// @ Instanciación de clases controladores
const TEST_CONTROLLER = new TestController();
/* 
* @ class Test : Clase Test extiende de Handlers
* @ methods : Las funciones que hará la clase, por eje: (crear, listar, actualizar...)
* @ setupTest : Método principal que contendrá el resto de métodos para poder agregarlos a la ruta en app.mjs.
*/
class TestRouter extends Handlers {
    constructor() {
        super();
    }
    setupTest() {
        this.test();
    }
    test() {
        this.get('/test', TEST_CONTROLLER.test);
    }
}
// @ Exportación de la clase Test.
export default TestRouter;