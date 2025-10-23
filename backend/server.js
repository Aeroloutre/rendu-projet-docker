import dotenv from 'dotenv';
import express, { json } from 'express';
import pgPromise from 'pg-promise';
import path from 'path';

dotenv.config({ path: '../.env' })

const app = express()
const port = 4000

const pgp = pgPromise();
const db = pgp(process.env.DB_LINK);

//Routes
app.use(express.static('../frontend/public'));

app.get('/status', (req, res) => {
  res.send('OK ! Le server est UP :D')
})

app.get('/items', async (req, res) => {
  try {
    const items = await readAllItems()
    res.send(items)
  } catch (err) {
    console.error(err)
    res.status(500).send('Erreur serveur')
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

const readAllItems = async () => {
  let items = await db.any('SELECT * FROM items')
  return items
}
