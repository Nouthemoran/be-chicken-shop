import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Admin = db.define('Admin', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type:DataTypes.STRING
    },
      password: {
        type:DataTypes.STRING
    },
      refresh_token: {
        type: DataTypes.STRING
      }
    
},{
    freezeTableName:true
});

export default Admin;

(async () => {
    await db.sync();
})();