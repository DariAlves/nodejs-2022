import express from 'express';
import { createCourse } from './routes/course.routes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', createCourse);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
