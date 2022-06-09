const DataTypes = require('sequelize');
const bd = require('../connectionBd');

const commentaire = bd.define('commentaire', {
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
    user_Id: {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    publication_Id : {
        type : DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = commentaire