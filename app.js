const tracer = require('dd-trace').init();
const express = require('express')
const app = express()
const port = 3000

const list = []

app.get('/', (req, res) => {

  res.send('OctoFX 2025 ... ')
})

app.get('/trade', (req, res) => {
  res.send('Convert currency 1 to currency 2 ...')
})

app.listen(port, () => {
  console.log(`OctoFX Trading Service. Listening on port ${port}`)
})