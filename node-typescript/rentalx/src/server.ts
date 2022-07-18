import express from 'express';
import { categoriesRouter } from './routes/categories.routes';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/categories', categoriesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost${port} 😎`);
});
