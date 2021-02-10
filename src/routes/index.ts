import { Router } from 'express';

import { businessRoutes } from './business.routes';

const routes = Router();

routes.use('/getActiveBusiness', businessRoutes);

export default routes;
  