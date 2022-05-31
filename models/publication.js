const DataTypes = require('sequelize');
const bd = require('../connectionBd');


const publication = bd.define('publication', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    texte : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    image : {
        type : DataTypes.STRING,
        allowNull : true
    },
    like : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
    user_Id: {
        type : DataTypes.INTEGER,
        allowNull: false
    }
});



module.exports = publication