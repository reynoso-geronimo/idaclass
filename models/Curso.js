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
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
    },
    precio: {
        type: DataTypes.INTEGER,
    },
    objetivo_titulo: {
        type: DataTypes.STRING
    },
    objetivo_texto: {
        type: DataTypes.STRING
    },
    perfil_titulo: {
        type: DataTypes.STRING
    },
    perfil_texto: {
        type: DataTypes.STRING
    },


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
    through: 'cursos_profesional_links',
    foreignKey: 'curso_id',
    otherKey: 'profesional_id',
    timestamps: false
});

export default Curso;