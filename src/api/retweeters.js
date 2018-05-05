import db from '../db/models';
import { client } from './index';
import { Op } from 'sequelize';

export default async id => {
  try {
    const response = await client.get('statuses/retweets', {
      id,
      count: 100
    });
    return await handleResponse(response, id);
  } catch (e) {
    console.error(e);
    throw new Error('Something went wrong.');
  }
};

const handleResponse = async (response, tweet_id) => {
  await response.forEach(async data => {
    const id = data.id_str;
    const user_data = {
      id: data.user.id_str,
      user_name: data.user.name,
      screen_name: data.user.screen_name,
      location: data.user.location,
      followers_count: data.user.followers_count,
      friends_count: data.user.friends_count,
      statuses_count: data.user.statuses_count
    };
    await createUser(user_data);
    await createRetweet(id, tweet_id, user_data.id);
  });

  // Get all users that retweeted the tweet from the database.
  const retweeters = await retweeters(tweet_id);
  return retweeters;
};

const retweeters = async id => {
  const tweet = await db.Tweet.findOne({
    where: {
      id
    }
  });
  const retweets = await tweet.getRetweets();
  console.log(retweets);
  return retweets;
};

const createUser = async ({
  id,
  followers_count,
  friends_count,
  statuses_count,
  location
}) => {
  const [twitter_user, user_created] = await db.User.findOrCreate({
    where: {
      id
    },
    defaults: {
      followers_count,
      friends_count,
      statuses_count,
      location
    }
  });
  return twitter_user.dataValues.id;
};

const createRetweet = async (id, tweet_id, twitter_user_id) => {
  const [retweet, created] = await db.Retweet.findOrCreate({
    where: {
      id
    },
    defaults: {
      tweet_id,
      twitter_user_id
    }
  });
};
