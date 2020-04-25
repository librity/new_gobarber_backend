import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ message: 'Sup guys!' }));

const port = 3333;

app.listen(port, () => {
  console.log(`👂 Listening on port ⚓${port}`);
});
