import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";
import Categoria from "./Categoria";
import Profesional from "./Profesional";

const Curso = sequelize.define("curso", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    duracion: {
        type: DataTypes.INTEGER,
    },
    descuento:{
        type: DataTypes.INTEGER,
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
    videoid: {
        type: DataTypes.STRING
    },
    modulos: {
        type: DataTypes.TEXT
    },

    objetivo_texto: {
        type: DataTypes.STRING
    },

    perfil_texto: {
        type: DataTypes.STRING
    },
    acerca_curso: {
        type: DataTypes.TEXT('long'),

    },
    dirigido: {
        type: DataTypes.TEXT('long'),

    }


}, {
    timestamps: false
})
Curso.belongsToMany(Categoria, {
    through: 'cursos_categoria_links',
    foreignKey: 'curso_id',
    otherKey: 'categoria_id',
    timestamps: false
});
Curso.belongsToMany(Profesional, {
    through: 'cursos_profesionals_links',
    foreignKey: 'curso_id',
    otherKey: 'profesional_id',
    timestamps: false
});

export default Curso;