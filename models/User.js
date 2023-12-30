import sequelize  from "../lib/sequelize";
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
  email: {
    type: DataTypes.STRING
  },
  provider: {
    type: DataTypes.STRING
  },
  
}, {
  timestamps: false
});

export default User;