const db = require('./db');  // use mysql db connection
const con = db.init();

function LoadTodoList(callback) {
  const SQL = `SELECT * FROM list`;
  con.query(SQL, (err, result, field) => {
    if (err) {
      console.log(err);
      callback('err');
    }
    else {
      callback(result);
    }
  });
}

function SaveTodoList(name, month, day, todo, callback) {
  const SQL = `INSERT INTO list (name, month, day, todo) VALUES (?, ?, ?, ?)`;
  const VALUES = [name, month, day, todo];

  con.query(SQL, VALUES, (err, result, field) => {
    if (err) {
      console.log(err);
      callback('err');
    }
    else {
      callback(result);
    }
  });
}

module.exports = {
  LoadTodoList,
  SaveTodoList
}