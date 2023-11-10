'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:{
        allowNull: false,
        type:Sequelize.STRING,
      },
      content:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      author:{
        allowNull: false,
        type:Sequelize.STRING,
      },
      password:{
        allowNull: false,
        type:Sequelize.STRING,
      },
      status:{
        allowNull: false,
        defaultValue: "FOR_SALE",
        type:Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};