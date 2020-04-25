import express, { json } from 'express';

import router from './router';

const app = express();

app.use(json());
app.use(router);

const port = 3333;

app.listen(port, () => {
  console.info(`👂 Listening on port ⚓${port}`);
});
