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
    acerca: {
        type: DataTypes.TEXT
    },
    duracion: {
        type: DataTypes.STRING
    },
    frecuencia: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.INTEGER,
    },
    precio_bo: {
        type: DataTypes.INTEGER,
    },
    precio_uy: {
        type: DataTypes.INTEGER,
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
    },
    ojetivo_titulo_uno: {
        type: DataTypes.STRING
    },
    ojetivo_texto_uno: {
        type: DataTypes.STRING
    },
    ojetivo_titulo_dos: {
        type: DataTypes.STRING
    },
    ojetivo_texto_dos: {
        type: DataTypes.STRING
    }, ojetivo_titulo_tres: {
        type: DataTypes.STRING
    },
    ojetivo_texto_tres: {
        type: DataTypes.STRING
    },
    perfil_titulo_uno: {
        type: DataTypes.STRING
    },
    perfil_texto_uno: {
        type: DataTypes.STRING
    },
    perfil_titulo_dos: {
        type: DataTypes.STRING
    },
    perfil_texto_dos: {
        type: DataTypes.STRING
    },
    perfil_titulo_tres: {
        type: DataTypes.STRING
    },
    perfil_texto_tres: {
        type: DataTypes.STRING
    },
    acerca_curso: {
        type: DataTypes.TEXT('long'),

    }



}
    , {
        freezeTableName: true,
        timestamps: false,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
)
export default CursosFormacion;