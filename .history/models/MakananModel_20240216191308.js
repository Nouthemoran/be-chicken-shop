import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const  = db.define('', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama: DataTypes.STRING(25),
      alamat: DataTypes.TEXT,
      no_hp: DataTypes.STRING(13),
    
},{
    freezeTableName:true
});

export default ;

(async () => {
    await db.sync();
})();