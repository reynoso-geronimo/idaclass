const { Sequelize } = require("sequelize");

const sequelize = new Sequelize( {
    host: 'localhost',
    username: 'root',
    password:null,
    database:"idaclass-cms",
    dialectModule: require('mysql2'),
    dialect: 'mysql'
  });

module.exports = sequelize;