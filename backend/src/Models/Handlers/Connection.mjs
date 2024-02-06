'use strict'
import Sequelize from 'sequelize';
import Config from '../../Config/Config.mjs';

export default class Connection{
    constructor() {
        this.SEQUELIZE = new Sequelize(Config.dbName, Config.dbUser, Config.dbPassword, {
            host: Config.dbHost,
            dialect: Config.dbDialect,
            port: Config.dbPort
        });
    }
    async testConnection() {
        try {
            await this.SEQUELIZE.authenticate();
            console.log('The connection to the database was successful.💽');
            return true;
        } catch (error) {
            console.log('There was an error connecting to the database.💽');
            return false;
        }
    }
}