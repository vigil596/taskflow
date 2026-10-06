let tasks = [];
let nextId = 1;

function list(req, res) {
  res.json(tasks);
}

function create(req, res) {
  const task = { id: nextId++, title: req.body.title || 'Untitled', done: false };
  tasks.push(task);
  res.status(201).json(task);
}

function complete(req, res) {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Not Found' });
  }
  task.done = true;
  res.json(task);
}

module.exports = { list, create, complete };
