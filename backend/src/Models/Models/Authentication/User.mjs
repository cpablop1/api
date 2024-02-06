import { Sequelize, DataTypes, Model } from 'sequelize';
import Connection from '../../Handlers/Connection.mjs';
const sequelize = new Connection().SEQUELIZE;
/* const sequelize = new Sequelize('product_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
}); */

class User extends Model { }

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        modelName: 'User'
    }
);

export default User;