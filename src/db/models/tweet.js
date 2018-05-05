export default (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    'tweet',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      }
    },
    {
      tableName: 'tweet',
      underscored: true
    }
  );

  Tweet.associate = models => {
    Tweet.belongsTo(models.User);
    Tweet.hasMany(models.Retweet);
  };

  return Tweet;
};
