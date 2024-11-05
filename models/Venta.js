import { DataTypes } from "sequelize";
import sequelize from "../lib/sequelize.js";

const Venta = sequelize.define('ventas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
    },
    pago_modalidad: {
        type: DataTypes.STRING,
    },
    payment_id: {
        type: DataTypes.BIGINT,

        unique: true
    },
    payment_id_paypal: {
        type: DataTypes.STRING,

        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    }

}, {
    freezeTableName: true, // Desactivar los campos createdAt y updatedAt generados automáticamente
    tableName: 'ventas', // Nombre de la tabla en la base de datos
    timestamps: false, // Desactivar los campos createdAt y updatedAt generados automáticamente
});

// Asociaciones (si es necesario)

export default Venta
