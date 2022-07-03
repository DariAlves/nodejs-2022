import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(categoriesRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
