import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

const Contacto = sequelize.define('contactos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    curso: {
        type: DataTypes.STRING
    },
    utm_source: {
        type: DataTypes.STRING
    },
    utm_medium: {
        type: DataTypes.STRING
    },
    utm_campaign: {
        type: DataTypes.STRING
    },
    utm_term: {
        type: DataTypes.STRING
    },
    utm_content: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

export default Contacto;