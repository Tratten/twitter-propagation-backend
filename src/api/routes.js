import { Router } from "express";
import db from "../db/models";
import { getTweet } from "./twitter";

const routes = Router();

/**
 * GET home page
 */
routes.get("/tweet/:id", (req, res) => {
  getTweet(req.params.id)
    .then(tweet => {
      // Tweet specific data
      const tweet_data = {
        id: tweet.id_str,
        text: tweet.text,
        user_name: tweet.user.name,
        twitter_id: tweet.user.id_str,
        screen_name: tweet.user.screen_name,
        location: tweet.user.location ? tweet.user.location : false
      };
      // Check if tweet exists in our db
      db.User.findOrCreate({
        where: {
          twitter_id: tweet_data.twitter_id
        },
        defaults: {
          location: tweet_data.location
        }
      })
        .then(([instance, created]) => {
          return db.Tweet.findOrCreate({
            where: {
              id: tweet_data.id
            },
            defaults: {
              twitter_user_id: instance.dataValues.id
            }
          });
        })
        .then(tweet => {
          res.status(200).send({
            id: tweet_data.id,
            text: tweet_data.text,
            twitter_id: tweet_data.twitter_id,
            user_name: tweet_data.user_name,
            location: tweet_data.location,
            screen_name: tweet_data.screen_name
          });
        })
        .catch(error => {
          res.status(error).send({
            error: "Something went wrong with creating user or tweet."
          });
        });
    })
    .catch(error => {
      res.status(error).send({
        error: "Could not find tweet."
      });
    });
});

routes.get("/tweet/:id/retweets", (req, res) => {
  db.Tweet.findOne({
    where: {
      id: req.params.id
    }
  }).then(tweet => {
    // Lookup retweets.
    // Hämta alla ids, och sedan alla locations
    console.log(tweet);
  });
});

export default routes;
