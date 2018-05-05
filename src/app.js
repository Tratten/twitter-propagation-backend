import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import api from './api';

const app = express();

/**
 * Middlewares
 */

// Parse all bodys as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log all requests to console.
app.use(morgan('dev'));

// Routes
app.use('/api', api);

export default app;
