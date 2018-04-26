module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tweet',
      'userId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'tweet',
      'userId'
    )
  }
};
