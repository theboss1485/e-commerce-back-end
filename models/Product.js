/*This file contains the Product model according to the specifications listed in the assignment instructions.*/

// Here, we import important parts of the Sequelize library.
const { Model, DataTypes } = require('sequelize');

// Here, we import our database connection from config.js
const sequelize = require('../config/connection');

// Here, we initialize the Product model (table) by extending off Sequelize's Model class.
class Product extends Model {}

// Here, we set up fields and rules for the Product model
Product.init(
  {
    id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {

        type: DataTypes.DECIMAL,
        allowNull: false,

        /* Here, check that the price is a decimal, but I also give the non-decimal part of the number a limit of 
        14 digits so as to avoid exceeding the memory limit for decimals. */
        validate: {

            is: /^[0-9]{1,14}\.{1}[0-9]{2}$/
        }
    },
    stock: {

        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,

        /*Here, I check that the stock is an integer, and I also set a generous stock limit of 999,999,999. */
        validate: {

            is: /^[0-9]{1,9}$/
        }
    },

    /* The category_id field is a foreign key that references the primary key (id) of the Category model. */
    category_id: {
        
        type: DataTypes.INTEGER,
        references: {

            model: 'category',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
