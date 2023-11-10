'use strict';

const {
  Model
} = require('sequelize');
// const sequelize = new Sequelize("sqlite::memory:");
// const Products = sequelize.define("Product",{
//   title: DataTypes.STRING,
//   content: DataTypes.STRING,
//   author: DataTypes.STRING,
//   password: DataTypes.STRING,
//   status: DataTypes.STRING
// },{
//   sequelize,
//   modelName: 'Products',
// });
// export default Products;

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    product_id: {
      primaryKey: true,
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
    password: {
      type: DataTypes.STRING
    },
    status: {
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