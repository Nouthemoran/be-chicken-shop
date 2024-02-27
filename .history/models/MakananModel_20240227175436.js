import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Makanan = db.define('Makanan', {
    id_makana: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    nama_makanan: {
        type: DataTypes.STRING(25),
    },
    harga: DataTypes.INTEGER,
    
},{
    freezeTableName:true
});

export default Makanan;

(async () => {
    await db.sync();
})();