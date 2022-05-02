import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Node.js' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} 🚀`);
});
