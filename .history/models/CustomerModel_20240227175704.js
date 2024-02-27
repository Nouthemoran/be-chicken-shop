import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Customer = db.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    alamat: DataTypes.TEXT,
    no_hp: DataTypes.STRING(13),
    email: {
        type: DataTypes.STRING
    },
    username: {
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }

    
},{
    freezeTableName:true
});

export default Customer;

(async () => {
    await db.sync();
})();