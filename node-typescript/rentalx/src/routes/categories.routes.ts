import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const router = Router();

const categories = [];

router.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: uuidV4(),
    name,
    description,
  };

  categories.push(category);

  return response.status(201).json(category);
});

export { router as categoriesRouter };
