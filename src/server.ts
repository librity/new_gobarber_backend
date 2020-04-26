import express, { json } from 'express';

import router from './router';
import './database';

const app = express();

app.use(json());
app.use(router);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.info(`👂 Listening on port ⚓${port}`);
});
