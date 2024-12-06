import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Horario from "./Horario";

const Sede = sequelize.define('sedes', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    linkredes: {
        type: DataTypes.STRING
    },
    linkmaps: {
        type: DataTypes.STRING
    },
    zona: {
        type: DataTypes.STRING
    },
    created_by_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'admin_users',
            key: 'id'
        }
    },
    updated_by_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'admin_users',
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});


export default Sede;
