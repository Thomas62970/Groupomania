const DataTypes = require('sequelize');
const bd = require('../connectionBd');

const likes = bd.define('likes', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
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

module.exports = likes