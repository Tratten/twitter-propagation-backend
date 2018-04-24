export default (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
      allowNull: false,
      autoIncrement: false,
    },
    twitterId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    location: DataTypes.STRING
  }, {
    // class methods
  });

  User.associate = function(models) {
    User.hasMany(models.Tweet)
    User.hasMany(models.Retweet)
  };

  return User;
};
