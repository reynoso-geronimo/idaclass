import sequelize  from "../lib/sequelize";
import { DataTypes }  from "sequelize";
import Curso from "./Curso";
const Categoria = sequelize.define('categorias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  } 
} , {
    freezeTableName: true,
    timestamps: false,
    createdAt: "created_at",
    updatedAt:"updated_at"
});
// Categoria.belongsToMany(Curso, {
//     through: 'cursos_categoria_links',
//     foreignKey: 'categoria_id',
//     otherKey: 'curso_id',
//      timestamps: false 
//   });

export default Categoria;