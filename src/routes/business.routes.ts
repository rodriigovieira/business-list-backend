import { Router } from 'express';
import { defaultClient } from '../services/api';

export const businessRoutes = Router();
const APIBusinessEndpoint: string = "/resource/6rrh-rzua.json";

businessRoutes.get('/', async (req, res) => {
  const response = await defaultClient.get(APIBusinessEndpoint)

  res.json(response.data);
});
