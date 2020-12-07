import express from 'express';
import { PORT } from './constants';

const main = () => {
  const app = express();
  app.get('/', (_, res) => {
    res.send(`👋 Hello World from port ${PORT} !`);
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT} ...`);
  });
};

main();
