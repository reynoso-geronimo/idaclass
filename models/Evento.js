import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Profesional from "./Profesional";

const Evento = sequelize.define("eventos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    clasificacion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created_by_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    updated_by_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false,
    freezeTableName: true,
});
Evento.belongsToMany(Profesional, {
    through: 'eventos_profesional_links',
    foreignKey: 'evento_id',
    otherKey: 'profesional_id',
    timestamps: false
});
export default Evento;