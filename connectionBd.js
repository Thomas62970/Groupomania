const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', 'Thomas62970', {
    host: 'localhost',
    dialect: 'mysql'
  });
 

  module.exports=sequelize