import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

const Speaker = sequelize.define('speakers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  titulo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  createdAt: "created_at",
  updatedAt: "updated_at"
});


export default Speaker;