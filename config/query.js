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

module.exports = {
  LoadTodoList
}