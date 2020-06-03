import express from 'express';

import PointsRoute from "./PointsRoute";
import ItemsRoute from "./ItemsRoute";

const routes = express.Router();

routes.use('/points', PointsRoute);
routes.use('/items', ItemsRoute);

export default routes;