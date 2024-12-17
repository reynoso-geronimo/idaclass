import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Sede from "./Sede";
import CursosFormacion from "./CursoFormacion";

const Horario = sequelize.define('horarios', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    dia: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.TIME(3)
    },
   
   
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});



export default Horario;
