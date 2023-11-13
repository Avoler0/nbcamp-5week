'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models){
      models.Products.belongsTo(models.Users, { foreignKey: "user_id" });
    }
  }
  Products.init({
    product_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id:{
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    status: {
      defaultValue: "FOR_SALE",
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Products',
  });
  
  return Products;
};
