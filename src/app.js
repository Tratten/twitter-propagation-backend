import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const app = express();

app.use('/', routes);

/**
 * Middlewares
 */

// Parse all bodys as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log all requests to console.
app.use(morgan('dev'));

// ##


export default app;
