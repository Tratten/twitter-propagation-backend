import Tweet from './index';
import User from '../user';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export const createWithExistingAuthor = (id, author_id, ) => {
  if (typeof id === 'undefined' || typeof author === 'undefined') {
    throw TypeError
  }
  User
    .findOne({
      where: {
        id: {
          [Op.eq]: author_id
        }
      }
    })
    .then((user) => {
      if (!user) {
        return false;
      } else {
        Tweet.create({ id })
        user.setTweets([id])
          .then(() => {
            user.getTweets().then((associatedTweets) => {
              console.log(associatedTweets);
            })
          });
      }
    })
}