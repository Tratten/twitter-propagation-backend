export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "twitter_user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      twitter_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      location: DataTypes.STRING
    },
    {
      underscored: true
    }
  );

  User.associate = models => {
    User.hasMany(models.Tweet);
    User.hasMany(models.Retweet);
  };

  return User;
};
