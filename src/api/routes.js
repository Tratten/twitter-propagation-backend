import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import db from '../db/models';
import { getTweet, getRetweeters } from './twitter';

const routes = Router();

/**
 * GET home page
 */
routes.get('/tweet/:id', (req, res) => {
  getTweet(req.params.id)
    .then(tweet_data => {
      res.status(HttpStatus.OK).send({
        tweet_data
      });
    })
    .catch(error => {
      console.error(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
        error
      });
    });
});

routes.get('/tweet/:id/retweeters', (req, res) => {
  getRetweeters(req.params.id)
    .then(arg => {
      res.status(HttpStatus.OK).send({
        arg
      });
    })
    .catch(error => {
      console.error(error);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
        error
      });
    });
});

export default routes;
