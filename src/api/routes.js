import { Router } from 'express';
import db from '../db/models';
import { getTweet } from './twitter';
import { createWithExistingAuthor } from '../db/models/tweet/queries';

const routes = Router();

/**
 * GET home page
 */
routes.get('/tweet/:id', (req, res) => {
  getTweet(req.params.id)
    .then((tweet) => {
      // Tweet specific data
      const tweet_id = tweet.id;
      const text = tweet.text;

      // User specific data
      const user_name = tweet.user.name;
      const user_id = tweet.user.id;
      const sceen_name = tweet.user.screen_name;
      const location = tweet.user.location ? tweet.user.location : false;

      // Check if tweet exists in our db
      db.User.create({
        location,
        twitterId: user_id.toString(),
      })
        .then(() => {
          createWithExistingAuthor(tweet_id.toString(), user_id.toString());
        })
    })
    .catch((error) => {
      // Only gets 404 errors from twitter-handler.
      res.status(error).send({
        error: 'Tweet not found.',
      })
    });
});

routes.get('/tweet/:id/retweet', (req, res) => {
  // Get retweets from twitter api for specific tweet.


  // Store the users, and then get their locations

  // return the locations
});

export default routes;
