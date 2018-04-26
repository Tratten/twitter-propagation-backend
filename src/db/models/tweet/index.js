export default (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
  }, {});

  Tweet.associate = (models) => {
    Tweet.belongsTo(models.User, { as: 'author' });
    Tweet.hasMany(models.Retweet);
  };

  return Tweet;
};
