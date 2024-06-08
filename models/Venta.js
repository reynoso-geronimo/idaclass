import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";


const Venta = sequelize.define('ventas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    payment_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        unique: true
    },
    payment_id_paypal: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    freezeTableName: true, // Desactivar los campos createdAt y updatedAt generados automáticamente
    tableName: 'ventas', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactivar los campos createdAt y updatedAt generados automáticamente
});

// Asociaciones (si es necesario)


module.exports = Venta