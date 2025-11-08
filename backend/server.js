import express from 'express';
import db from './db.js';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

// Route pour tester la connexion à la DB
app.get('/', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.send('Communication avec la base de données établie');
  } catch (err) {
    res.status(500).send('Impossible de se connecter à la base de données');
  }
});

// Route JSON (API consommée par le frontend)
app.get('/api/generate-names', async (req, res) => {
  try {
    const [adjectives] = await db.query('SELECT word FROM adjectives ORDER BY RAND() LIMIT 10');
    const [nouns] = await db.query('SELECT word FROM nouns ORDER BY RAND() LIMIT 10');

    const names = adjectives.map((adj, i) => `The ${adj.word} ${nouns[i].word}`);
    res.json(names);
  } catch (err) {
    res.status(500).json({ error: 'Impossible de générer les noms' });
  }
});

// Route HTML
app.get('/generate-names', async (req, res) => {
  try {
    const [adjectives] = await db.query('SELECT word FROM adjectives ORDER BY RAND() LIMIT 10');
    const [nouns] = await db.query('SELECT word FROM nouns ORDER BY RAND() LIMIT 10');

    const names = adjectives.map((adj, i) => `The ${adj.word} ${nouns[i].word}`);

    const htmlList = `<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
    res.send(htmlList);
  } catch (err) {
    res.status(500).send('Impossible de générer les noms');
  }
});