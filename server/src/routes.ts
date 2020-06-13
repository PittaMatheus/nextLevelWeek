import express from 'express';
import Knex from './database/connection'
import PointsController from './controllers/PointsController';


const pointsController = new PointsController();

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await Knex('items').select('*');
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      title: item.name,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});


routes.post('/points', pointsController.create);

export default routes;