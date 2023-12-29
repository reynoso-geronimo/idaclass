const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

const Curso = sequelize.define("Curso", {
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
    imagen: {
        type: DataTypes.STRING,

    },
    precio: {
        type: DataTypes.INTEGER,

    },
    modalidad: {
        type: DataTypes.STRING,

    }

}, {
    timestamps: false
})
module.exports = Curso;