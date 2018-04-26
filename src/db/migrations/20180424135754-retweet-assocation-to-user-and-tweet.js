module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("retweets", "tweet_id", {
        type: Sequelize.STRING,
        references: {
          model: "tweets",
          key: "id"
        }
      })
      .then(() => {
        return queryInterface.addColumn("retweets", "twitter_user_id", {
          type: Sequelize.UUID,
          references: {
            model: "twitter_users",
            key: "id"
          }
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("retweets", "tweet_id").then(() => {
      return queryInterface.removeColumn("retweets", "twitter_user_id");
    });
  }
};
