'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      models.Users.hasMany(models.Products, { foreignKey: "user_id" });
    }
  }
  Users.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email:{
      unique:true,
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};