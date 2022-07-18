import { Router } from 'express';
import { Category } from '../models/Category';

const router = Router();

const categories: Category[] = [];

router.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  Object.assign(category, {
    name,
    description,
  });

  categories.push(category);

  return response.status(201).json(category);
});

export { router as categoriesRouter };
