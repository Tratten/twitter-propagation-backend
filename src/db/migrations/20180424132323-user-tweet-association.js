module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'tweet',
      'userId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'user',
          key: 'id'
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
