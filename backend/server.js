import express from 'express';
import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.API_PORT || 4000;

const pgp = pgPromise();
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/status', (req, res) => {
  res.json({ status: 'OK', message: 'API en vie' });
});

app.get('/items', async (req, res) => {
  try {
    const items = await db.any('SELECT * FROM items');
    res.json(items);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

const startServer = async () => {
  try {
    await db.connect();
    console.log('Database connected');
    
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('Server failed to start:', err);
    process.exit(1);
  }
};

startServer();