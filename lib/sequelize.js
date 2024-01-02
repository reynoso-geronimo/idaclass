import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
const sequelize = new Sequelize( {
    host: process.env.DB_HOST ,
    username: process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    dialectModule: mysql2,
    dialect: 'mysql'
  });

export default  sequelize;