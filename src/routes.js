import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */
 routes.get('/', (req, res) => {
   res.send('Hello world');
 });

 export default routes;
