const express = require('express')
const app = express()
const port = 3000
const db_config = require('./config/db')
const db = require('./config/query')
const conn = db_config.init()

db_config.connect(conn)

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  db.LoadTodoList((todoList) => {
    res.render('index', {
      todo : todoList
    })
  })
})

app.post('/saveTodo', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log("listening on port " + port)
})