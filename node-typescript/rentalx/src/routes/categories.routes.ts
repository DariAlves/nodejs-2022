import { Router } from 'express';

const router = Router();

const categories = [];

router.post('/', (request, response) => {
  const { name, description } = request.body;

  categories.push({ name, description });

  return response.status(201).send();
});

export { router as categoriesRouter };
