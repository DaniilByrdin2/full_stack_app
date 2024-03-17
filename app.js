const express = require('express');
const mysql2 = require("mysql2/promise");
const bodyParser = require("body-parser")
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');

const pool = mysql2.createPool({

  host: 'localhost',
  user: 'root',
  database: 'bets',
  password: ''

});

const app = express(); 

app.use( cors() )
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Serever start ${port}`)); 



app.post("/add", function (req, res) {

  if(!req.body) return res.sendStatus(400);

  const id = uuidv4()

  const sendStr = req.body.bet.dataBet

  pool.query( "INSERT INTO `stavki`(`id`, `dataBet`) VALUES " + `( '${id}','${sendStr}')` )
  .then( () =>  console.log("bet added", sendStr ) )
  .then( () => { res.send( id ) } )

});

app.get('/', (req, res) => { 
  pool.query("SELECT * FROM stavki WHERE 1").then( data => {
    res.json( data[0] )
  } )
}); 

app.delete( '/delete:id', ( req, res ) => {

  if(!req.body) return res.sendStatus(400);
  const id = req.params.id
  
  if ( id === "all" ){
    pool.query("DELETE FROM `stavki` WHERE 1")
    .then(() => { res.send("delete all bets") })
    .catch( ( e ) => res.send( e ) )
  } else if (id) {

    console.log(req.params);

    pool.query("DELETE FROM `stavki` WHERE `id`=" + `"${id}" LIMIT 1`)
    .then(() => { res.send(id) });
  }

} )

app.put( '/update:id', (req, res) => {

    if(!req.body) return res.sendStatus(400);
    const sendStr = req.body.bet.dataBet

    console.log( req.params.id );
    console.log( sendStr );
    
    console.log("update bet");
    pool.query( "UPDATE `stavki` SET `dataBet`=" + `'${sendStr}'` + ` WHERE id = ` + `"${req.params.id}"`)
    .then( () => {
      res.send("update bet");
    } )

} )