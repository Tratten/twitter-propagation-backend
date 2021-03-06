module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tweet', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tweet');
  }
};
