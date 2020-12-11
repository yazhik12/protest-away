var dotenv = require("dotenv").config(),
  express = require("express"),
  pg = require("pg"),
  cors = require("cors"),
  app = express();

//Allowed cors in localhost
app.use(cors());

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

//Database Config .env
const config = {
  host: process.env.PG_HOST ? process.env.PG_HOST : 'localhost' ,
  user: process.env.PG_USER,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT
};

//Documentation for node-postgres: https://node-postgres.com/
const pool = new pg.Pool(config);

app.get("/getreports", (req, res, next) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
    }
    client.query("SELECT * FROM form_submissions", function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result.rows);
    });
  });
});

app.post("/submitform", (req, res, next) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
    }
    console.log('we connected to db!')
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const event_category = req.body.event_category;
    const event_date = req.body.event_date;
    const state = req.body.state;
    const city = req.body.city;
    const event_title = req.body.event_title;
    const event_description = req.body.event_description;

  
    const query = {
      text: 'INSERT INTO form_submissions(id, name, email, event_category, event_date, state, city, event_description, created_on, event_title) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      values: [id, name, email, event_category, event_date, state, city, event_description, new Date(), event_title],
    }
    
    client.query(query, function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result);
    });
  });
});

//Server
app.listen(8000, function() {
  console.log("API listening on http://localhost:8000/api.json");
});
