import Twitter from 'twitter';
import HttpStatus from 'http-status-codes';
import db from '../db/models';
import { HTTP_VERSION_NOT_SUPPORTED } from 'http-status-codes';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

export const getTweet = async id => {
  try {
    const tweet = await client.get('statuses/show', { id });
    const tweet_data = await handleTweetData(tweet);
    return tweet_data;
  } catch (e) {
    console.error(e);
    throw new Error('Something went wrong.');
  }
};

export const getRetweeters = async id => {
  try {
    const retweeters = await client.get('statuses/retweets', { id });
    return retweeters;
  } catch (e) {
    console.error(e);
    throw new Error('Something went wrong.');
    throw 404;
  }
};

const handleTweetData = async tweet => {
  const tweet_data = {
    id: tweet.id_str,
    text: tweet.text,
    user_name: tweet.user.name,
    twitter_id: tweet.user.id_str,
    screen_name: tweet.user.screen_name,
    location: tweet.user.location ? tweet.user.location : ''
  };
  const [twitter_user, user_created] = await db.User.findOrCreate({
    where: {
      twitter_id: tweet_data.twitter_id
    },
    defaults: {
      location: tweet_data.location
    }
  });
  const [db_tweet, tweet_created] = await db.Tweet.findOrCreate({
    where: {
      id: tweet_data.id
    },
    defaults: {
      twitter_user_id: twitter_user.dataValues.id
    }
  });
  return tweet_data;
};
