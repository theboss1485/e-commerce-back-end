/*This file contains the Tag model according to the specifications listed in the assignment instructions.*/

// Here, we import important parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Here, we import our database connection from config.js
const sequelize = require('../config/connection.js');

// Here, we initialize the Tag model (table) by extending off Sequelize's Model class.
class Tag extends Model {}

Tag.init(
  {
    id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tag_name: {
        
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
