const express = require('express');
const mysql2 = require("mysql2/promise");
const bodyParser = require("body-parser")
const cors = require("cors")

const pool = mysql2.createPool({

  host: 'localhost',
  user: 'root',
  database: 'bets',
  password: ''

});

const app = express(); 
// bodyParser.urlencoded(),
app.use( cors() )

app.use(bodyParser.urlencoded())

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Serever start ${port}`)); 

const urlencodedParser = express.urlencoded({extended: false});


app.post("/add", function (req, res) {

  if(!req.body) return res.sendStatus(400);
  console.log(req.body);

  const sendStr = req.body
  pool.query( "INSERT INTO `stavki`(`id`, `dataBet`) VALUES " + `( '','${sendStr.dataBet}')` ).then( (res) => {
    console.log("OK");
  } )
  res.send("your bet added")

});

app.get('/', (req, res) => { 
  pool.query("SELECT * FROM stavki WHERE 1").then( data => {
    res.json( data[0] )
  } )
}); 


app.delete( '/deleteAll', ( req, res ) => {

  res.send("delete all bets")

  pool.query( "DELETE FROM `stavki` WHERE 1" )
  .then( res => {
    console.log("delete all bets");
  } )

} )