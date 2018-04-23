export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    }
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
    // associations can be defined here
  };

  return User;
};
