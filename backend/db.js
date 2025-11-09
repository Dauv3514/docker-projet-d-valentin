import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

async function createConnection() {
  const maxRetries = 10;
  const retryInterval = 5000; // 5 secondes

  for (let i = 0; i < maxRetries; i++) {
    try {
      const connection = await mysql.createConnection(config);
      console.log('Communication avec la base de données établie');
      return connection;
    } catch (err) {
      console.log(`Tentative de connexion échouée (${i + 1}/${maxRetries}). Nouvelle tentative dans 5 secondes...`);
      await new Promise(resolve => setTimeout(resolve, retryInterval));
    }
  }
  throw new Error('Impossible de se connecter à la base de données après plusieurs tentatives');
}

const db = await createConnection();

db.on('error', async (err) => {
  console.error('Erreur de base de données:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Connexion perdue. Tentative de reconnexion...');
    db = await createConnection();
  }
});

export default db;