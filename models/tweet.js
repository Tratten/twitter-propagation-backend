'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tweet = sequelize.define('Tweet', {
    tweet_id: DataTypes.STRING,
    text: DataTypes.TEXT
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};