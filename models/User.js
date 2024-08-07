import sequelize from "../lib/sequelize";
import { DataTypes } from "sequelize";

const User = sequelize.define("up_user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unsigned: true
  },
  username: {
    type: DataTypes.STRING
  },
  given_name: {
    type: DataTypes.STRING
  },
  family_name: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  provider: {
    type: DataTypes.STRING
  },
  pais: {
    type: DataTypes.STRING
  },
  estado_provincia: {
    type: DataTypes.STRING
  },
  localidad: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  telefono: {
    type: DataTypes.INTEGER
  },
  dni: {
    type: DataTypes.INTEGER
  },
  dob: {
    type: DataTypes.DATE
  }
}, {
  timestamps: false
});

export default User;
