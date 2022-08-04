const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
    {name:'dawid',
    age: '27'},
    {
        name:'dawid',
        age: '28'
    }
])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})