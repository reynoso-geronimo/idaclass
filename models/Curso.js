import sequelize  from "../lib/sequelize";
import Categoria from "./Categoria";
import { DataTypes }  from "sequelize";

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
    modalidad: {
        type: DataTypes.STRING,
        
    }
    
}, {
    timestamps: false
})
Curso.belongsToMany(Categoria, {
    through: 'cursos_categoria_links', 
    foreignKey: 'curso_id', 
    otherKey: 'categoria_id' ,
    timestamps: false 
  });
export default Curso;