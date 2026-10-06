function status(req, res) {
  res.json({ app: 'taskflow', status: 'ok' });
}

module.exports = { status };
