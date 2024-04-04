import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

const CursosFormacion = sequelize.define("cursos_formacions", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    acerca_titulo: {
        type: DataTypes.TEXT
    },
    acerca_subtitulo: {
        type: DataTypes.TEXT
    },
    imagen: {
        type: DataTypes.STRING
    },
    duracion: {
        type: DataTypes.STRING
    },
    frecuencia: {
        type: DataTypes.STRING
    },
    dedicacion: {
        type: DataTypes.STRING
    },
    modalidades: {
        type: DataTypes.STRING
    },
    modulos: {
        type: DataTypes.TEXT
    },
    trainers: {
        type: DataTypes.TEXT
    },
    videoid: {
        type: DataTypes.STRING
    },
    contenido: {
        type: DataTypes.STRING
    }


}
    , {
        freezeTableName: true,
        timestamps: false,
        createdAt: "created_at",
        updatedAt:"updated_at"
    }
)
export default CursosFormacion;