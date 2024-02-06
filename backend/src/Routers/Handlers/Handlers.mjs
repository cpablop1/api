'use strict'
import express from 'express' //importamos la librería express para manejar las rutas

class Handlers {
    constructor() {
        // @Crear una variable router global el router de express
        this.router = express.Router({ caseSensitive: true });
    }

    get(url, fun) {
        this.router.get(url, fun); // @funcion get para el metodo get de express.Router
    }
    post(url, fun) {
        this.router.post(url, fun); // @funcion post para el metodo post de express.Router
    }
}

export default Handlers; //@Exportacion de la clase