const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

require('dotenv').config();
var dbconnect = mysql.createConnection({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
});

console.log({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
  });

app.get('/', (re, res)=> {
    return res.send("Hello World");
})

app.get('/products', (req, res) => {
    sql = "select name, img, price from trees";
    dbconnect.query(sql, function(errorSQL, result) {
            if (errorSQL) throw errorSQL;
            else {
                return res.json(result);
            }
        }
    )
})


app.listen(4012, () => {
    console.log("Server is running on port 4012")
})