import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import apiRoutes from "./api/routes";

const app = express();

/**
 * Middlewares
 */

// Parse all bodys as json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Log all requests to console.
app.use(morgan("dev"));

// Routes
app.use("/api", apiRoutes);

export default app;
