const mysql = require('mysql2');
const { connect } = require('./Controller/registrationController');

// Create a connection pool
const connection = mysql.createConnection({
    host: 'localhost', // The host name of the database server
    user: 'root', // The username for the MySQL database
    password: 'root', // The password for the MySQL database
    database: 'node_project' ,// The name of the MySQL database
    port:'3306',
    connectionLimit:10
});



// connect to the MySQL database
connection.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });

  // close the MySQL connection
//connection.end();

// connection.query('SELECT * from stu_registration', function(err, rows, fields) {
//     if (!err) {
//       //  res.send(JSON.stringify(rows));
//       console.log(rows);
//     } else {
//         console.log('Error while performing Query.');
//     }
// });


// Export the pool
module.exports = connection;
