const DataTypes = require('sequelize');
const bd = require('../connectionBd');


const user = bd.define('user', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    avatar : {
        type : DataTypes.STRING,
        allowNull : true
    },
    moderateur : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
});

module.exports = user