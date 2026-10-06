const express = require('express');
const taskController = require('./controllers/taskController');
const healthController = require('./controllers/healthController');

function createApp() {
  const app = express();
  app.use(express.json());

  app.get('/health', healthController.status);
  app.get('/tasks', taskController.list);
  app.post('/tasks', taskController.create);
  app.patch('/tasks/:id', taskController.complete);

  return app;
}

module.exports = createApp;
