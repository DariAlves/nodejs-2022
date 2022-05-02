import express from 'express';

const PORT = 3333;

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Node.js' });
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} 🚀`);
});
