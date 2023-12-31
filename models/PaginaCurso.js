import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

  const PaginaCurso = sequelize.define('pagina_cursos', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    descripcionuno: {
      type: DataTypes.TEXT
    },
    descripciondos: {
      type: DataTypes.TEXT
    },
    descripciontres: {
      type: DataTypes.TEXT
    },
    check_1: {
      type: DataTypes.STRING
    },
    check_2: {
      type: DataTypes.STRING
    },
    check_3: {
      type: DataTypes.STRING 
    },
    check_4: {
      type: DataTypes.STRING
    },
    modulos: {
      type: DataTypes.TEXT('long')  
    },
    curso:{
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  


export default  PaginaCurso;
