/*This file contains the Category model according to the specifications listed in the assignment instructions.*/

// Here, we import important parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Here, we import our database connection from config.js
const sequelize = require('../config/connection.js');

// Here, we initialize the Category model (table) by extending off Sequelize's Model class.
class Category extends Model {}

Category.init(

    {
        id:{

            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name:{
            
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = Category;
