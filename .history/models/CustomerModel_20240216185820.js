import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Customer = db.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING(25),
      alamat: DataTypes.TEXT,
      no_hp: DataTypes.STRING(13),
    
},{
    freezeTableName:true
});

export default Customer;

(async () => {
    await db.sync();
})();