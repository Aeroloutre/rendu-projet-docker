import dotenv from 'dotenv'
import express from 'express';
import pgPromise from 'pg-promise'

dotenv.config({ path: '../.env' })

const app = express()
const port = 4000

const pgp = pgPromise();
const db = pgp(process.env.DB_LINK);

//Routes
app.get('/', (req, res) => {
  res.send('This is my express server !')
})

app.get('/status', (req, res) => {
  res.send('OK ! Le server est UP :D')
})

app.get('/items', (req, res) => {
  res.send((readAllItems()))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

const readAllItems = async () => {
  await db.any('SELECT * FROM items')
}
