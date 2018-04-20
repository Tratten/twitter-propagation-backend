import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
 routes.get('/', (req, res) => {
   res.status(200).send({
      message: 'This shit is kind of cool.',
   })
 });

 export default routes;
