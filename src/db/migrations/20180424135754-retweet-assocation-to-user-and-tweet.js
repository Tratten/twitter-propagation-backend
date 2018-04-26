'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'retweet',
      'tweetId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'tweet',
          key: 'id',
        },
      }
    )
    .then(() => {
      return queryInterface.addColumn(
        'retweet',
        'userId',
        {
          type: Sequelize.UUID,
          references: {
            model: 'users',
            key: 'id',
          },
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'retweet',
      'tweetId',
    )
    .then(() => {
      return queryInterface.removeColumn(
        'retweet',
        'userId',
      )
    });
  }
};
