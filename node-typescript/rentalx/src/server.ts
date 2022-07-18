import express from 'express';
import chalk from 'chalk';
import { categoriesRouter } from './routes/categories.routes';
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/categories', categoriesRouter);

app.listen(port, () => {
  console.log(
    chalk.bgGreenBright(`Server listening at http://localhost${port} 😎`)
  );
});
