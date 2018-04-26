export default (sequelize, DataTypes) => {
  const Retweet = sequelize.define('retweet', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
  }, {});

  Retweet.associate = (models) => {
    Retweet.belongsTo(models.User);
    Retweet.belongsTo(models.Tweet);
  };

  return Retweet;
};
