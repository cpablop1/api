// @ Variables de configuración global para la API...
class Config{
    constructor() {
        this.dbUser =  'root';
        this.dbPassword =  '';
        this.dbName =  'paint_store';
        this.dbHost =  'localhost';
        this.dbDialect =  'mysql';
        this.dbPort =  3306;
        this.serverPort = 3700;
    }
}
// @ Esta forma de exportación, sólo exporta una instancia de la clase, no la clase en sí.
export default new Config();