import express from 'express';

const PORT = 8000;

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
