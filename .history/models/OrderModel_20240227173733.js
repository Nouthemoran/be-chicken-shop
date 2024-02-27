import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Order = db.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Menggunakan nama_makanan sebagai referensi ke model Makanan
    nama_makanan: {
        type: DataTypes.STRING(25),
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

export default Order;

(async () => {
    await db.sync();
})();
