const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      twitterId: 'John Doe',
      location: 'Sweden',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('users', [{
      twitterId: {
        [Op.eq]: 'John Doe'
      }
    }], {});
  }
};
