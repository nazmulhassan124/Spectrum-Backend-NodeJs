const express = require('express');
const router = express.Router();
const connection = require('../db-config');

router.get('/getAll', (req, res) => {


     connection.query('SELECT * from stu_registration', function(err, rows, fields) {
        if (!err) {
         //   res.send(JSON.stringify(rows));
          res.send(rows)
        } else {
            console.log('Error while performing Query.');
        }
    });
    
});

router.post('/save',(req,res)=>{

    //Insert a record in the "customers" table:
  var sql = "INSERT INTO stu_registration (name, address) VALUES ('Company Inc', 'Highway 37')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
})



module.exports = router;