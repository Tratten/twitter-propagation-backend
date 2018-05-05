module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('twitter_user', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      },
      twitter_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      location: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('twitter_user');
  }
};
