'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
    });

    // seeding statuses here for make migrate
    await queryInterface.bulkInsert(
      'Statuses',
      [
        {
          name: 'To Do',
        },
        {
          name: 'In Progress',
        },
        {
          name: 'In Review',
        },
        {
          name: 'Done',
        },
        {
          name: 'Archived',
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Statuses');
  },
};
