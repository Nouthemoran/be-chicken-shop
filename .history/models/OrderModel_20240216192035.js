
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Makanan from "./Makanan.js"; // Import model Makanan

const { DataTypes } = Sequelize;

const Order = db.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // Mengganti nama_makanan dengan makananId dan membuat relasi ke model Makanan
    nama_makanan: {
        type: DataTypes.INTEGER,
        references: {
            model: Makanan, // Mengacu ke model Makanan
            key: 'nawma_makanan'
        }
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
Order.belongsTo(Makanan, { foreignKey: 'makananId', as: 'makanan' });

export default Order;

(async () => {
    await db.sync();
})();
