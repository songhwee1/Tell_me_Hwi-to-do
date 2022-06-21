const express = require('express')
const app = express()
const port = 3000
const db_config = require('./config/db')
const db = require('./config/query')
const conn = db_config.init()

db_config.connect(conn)

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get('/', (req, res) => {
  db.LoadTodoList((todoList) => {
    res.render('index', {
      todo : todoList
    })
  })
})

app.post('/saveTodo', (req, res) => {
  db.SaveTodoList(req.body.name, req.body.month, req.body.day, req.body.todo, () => {
    res.sendStatus(200)
  })
})

app.listen(port, () => {
  console.log("listening on port " + port)
})