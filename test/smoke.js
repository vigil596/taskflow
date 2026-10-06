const assert = require('assert');
const createApp = require('../src/app');

const server = createApp().listen(0, async () => {
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const health = await (await fetch(`${base}/health`)).json();
    assert.strictEqual(health.status, 'ok');

    const created = await (
      await fetch(`${base}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Write report' }),
      })
    ).json();
    assert.strictEqual(created.title, 'Write report');

    const done = await (await fetch(`${base}/tasks/${created.id}`, { method: 'PATCH' })).json();
    assert.strictEqual(done.done, true);

    console.log('All smoke tests passed');
    server.close();
  } catch (err) {
    console.error(err);
    server.close();
    process.exit(1);
  }
});
