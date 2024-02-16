import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Makanan = db.define('Makanan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_makanan: DataTypes.STRING(25),
      alamat: DataTypes.TEXT,
      no_hp: DataTypes.STRING(13),
    
},{
    freezeTableName:true
});

export default Makanan;

(async () => {
    await db.sync();
})();