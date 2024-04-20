const express = require("express");
const controller = require("./Controller/registrationController");

const app = express();
app.use(express.json())
//const connection = require("./db-config");

app.use(function(req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    return next();
  });

app.use("/api", controller);



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
