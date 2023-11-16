/*This file contains the ProductTag model according to the specifications listed in the assignment instructions.*/

// Here, we import important parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Here, we import our database connection from config.js
const sequelize = require('../config/connection');

// Here, we initialize the ProductTag model (table) by extending off Sequelize's Model class.
class ProductTag extends Model {}

ProductTag.init(

  {
    id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    /* The product_id field is a foreign key that references the primary key (id) of the Product model. */
    product_id: {
        
        type: DataTypes.INTEGER,
        references: {

            model: 'product',
            key: 'id'
        }
    },

    /* The tag_id field is a foreign key that references the primary key (id) of the Tag model. */
    tag_id: {
        
        type: DataTypes.INTEGER,
        references: {

            model: 'tag',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
