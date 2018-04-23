import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';

// Use local database whilst not in prod env.
if (env == 'development') {
  const sequelize = new Sequelize(
    'infosak_development_database',
    'postgres',
    'postgres', {
      dialect: 'postgres',
    });
} else {
  const sequelize = new Sequelize(
    process.env.DATABASE_URL, {
    dialect: 'postgres',
  });
}

const models = {
  //Tweet: sequelize.import('./tweet'),
  //Retweet: sequelize.import('./retweet'),
  User: sequelize.import('./user'),
}


// Create all associations.
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
