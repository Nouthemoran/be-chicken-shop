import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Makanan from "./MakananModel.js"; // Import model Makanan

const { DataTypes } = Sequelize;

const Order = db.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_makanan: {
        type: DataTypes.INTEGER, // Ubah tipe data menjadi INTEGER
        allowNull: false
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kuantitas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tanggal_order: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    freezeTableName: true
});

// Menambahkan relasi antara Order dan Makanan
Order.belongsTo(Makanan, { foreignKey: 'id_makanan', targetKey: 'id_m', as: 'makanan' });

export default Order;

(async () => {
    await db.sync();
})();
