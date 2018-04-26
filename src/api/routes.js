import { Router } from 'express';
import db from '../db/models';
import { getTweet } from './twitter';

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
      const user_id = tweet.user.id.toString();
      const sceen_name = tweet.user.screen_name;
      const location = tweet.user.location;

      console.log('user_id:', user_id);
      // Db object
      db.User.findOrCreate({
        where: {
          twitterId: user_id,
        },
      })
        .then((user) => {
          user.update({
            location
          })
          console.log(user);
        });


      res.status(200).send({
        text,
        user,
        sceen_name,
        location,
      });
    })
    .catch((error) => {
      // Only gets 404 errors from twitter-handler.
      res.status(error).send({
        message: 'Tweet not found.',
      })
    });
});


routes.get('/tweet/:id/retweet', (req, res) => {
  // Get retweets from twitter api for specific tweet.

  // Store the users, and then get their locations

  // return the locations
});

export default routes;
