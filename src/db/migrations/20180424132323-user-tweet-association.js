module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("tweets", "twitter_user_id", {
      type: Sequelize.UUID,
      references: {
        model: "twitter_users",
        key: "id"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("tweets", "twitter_user_id");
  }
};
