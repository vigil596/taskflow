# taskflow

Petit gestionnaire de tâches (API JSON, Express).

```bash
npm install
npm start
npm test
```

- `GET /health`
- `GET /tasks`
- `POST /tasks` — `{"title": "..."}`
- `PATCH /tasks/:id` — marque la tâche comme terminée
