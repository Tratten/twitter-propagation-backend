import Sequelize from 'sequelize';

import config from '../config/config';

const env = process.env.NODE_ENV || 'development';

if (config[env].use_env_variable) {
  var sequelize = new Sequelize(
    process.env[config[env].use_env_variable],
    config[env]
  );
} else {
  var sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    config[env]
  );
}

const models = {
  Users: sequelize.import('./users'),
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
