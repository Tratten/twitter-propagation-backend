export default (sequelize, DataTypes) => {
  const Tweet = sequelize.define('tweet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
  }, {});

  Tweet.associate = (models) => {
    Tweet.belongsTo(models.User);
    Tweet.hasMany(models.Retweet);
  };

  return Tweet;
};
