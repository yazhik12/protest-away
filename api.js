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
    const event_category = req.body.event_category;
    const event_date = req.body.event_date;
    const event_state = req.body.event_state;
    const event_city = req.body.event_city;
    const event_title = req.body.event_title;
    const event_description = req.body.event_description;
    const your_name = req.body.your_name;
    const your_email = req.body.your_email;
    const your_phone = req.body.your_phone;
    const your_city = req.body.your_city;
    const your_state = req.body.your_state;
    const victim_name = req.body.victim_name;
    const victim_gender = req.body.victim_gender;
    const victim_race = req.body.victim_race;
    const victim_age = req.body.victim_age;
    const victim_details  = req.body.victim_details;
    const offender_name = req.body.offender_name;
    const offender_gender = req.body.offender_gender;
    const offender_race = req.body.offender_race;
    const offender_age = req.body.offender_age;
    const offender_details = req.body.offender_details;
    const other_details = req.body.other_details;
    const was_reported = req.body.was_reported;
    const reported_to = req.body.reported_to;
    const has_news_coverage = req.body.has_news_coverage;
    const news_coverage_details = req.body.news_coverage_details;
    const victim_id =  req.body.victim_id;
    const offender_id = req.body.offender_id;
    const victim_ids = [victim_id];
    const offender_ids = [offender_id];
    const communities = req.body.communities;
  
    const query = {
      text: 'INSERT INTO form_submissions(id, your_name, your_email, your_city, your_state, your_phone, event_category, event_date, event_state, event_city, event_description, created_on, event_title, other_details, was_reported, reported_to, has_news_coverage, news_coverage_details, victim_ids, offender_ids, communities) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)',
      values: [id, your_name, your_email, your_city, your_state, your_phone, event_category, event_date, event_state, event_city, event_description, new Date(), event_title, other_details, was_reported, reported_to, has_news_coverage, news_coverage_details, victim_ids, offender_ids, communities],
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

app.post("/submitformvictims", (req, res, next) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
    }
    console.log('we connected to db!')
    const id = req.body.id;
    const event_category = req.body.event_category;
    const event_date = req.body.event_date;
    const event_state = req.body.event_state;
    const event_city = req.body.event_city;
    const event_title = req.body.event_title;
    const event_description = req.body.event_description;
    const your_name = req.body.your_name;
    const your_email = req.body.your_email;
    const your_phone = req.body.your_phone;
    const your_city = req.body.your_city;
    const your_state = req.body.your_state;
    const victim_name = req.body.victim_name;
    const victim_gender = req.body.victim_gender;
    const victim_race = req.body.victim_race;
    const victim_age = req.body.victim_age;
    const victim_details  = req.body.victim_details;
    const offender_name = req.body.offender_name;
    const offender_gender = req.body.offender_gender;
    const offender_race = req.body.offender_race;
    const offender_age = req.body.offender_age;
    const offender_details = req.body.offender_details;
    const other_details = req.body.other_details;
    const was_reported = req.body.was_reported;
    const reported_to = req.body.reported_to;
    const has_news_coverage = req.body.has_news_coverage;
    const news_coverage_details = req.body.news_coverage_details;
    const victim_id =  req.body.victim_id;
    const offender_id = req.body.offender_id;
    const victim_ids = [victim_id];
    const offender_ids = [offender_id];
    const communities = req.body.communities;
  

    const victim_query = {
      text: 'INSERT INTO victims(id, victim_name, victim_gender, victim_race, victim_age, victim_details, incident_id) VALUES($1, $2, $3, $4, $5, $6, $7)',
      values: [victim_id, victim_name, victim_gender, victim_race, victim_age, victim_details, id],
    }

    client.query(victim_query, function(err, result) {
      done();
      if (err) {
        console.log(err);
        res.status(400).send(err);
      }
      res.status(200).send(result);
    });

  });
});

app.post("/submitformoffenders", (req, res, next) => {
  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Can not connect to the DB because of " + err);
    }
    console.log('we connected to db!')
    const id = req.body.id;
    const event_category = req.body.event_category;
    const event_date = req.body.event_date;
    const event_state = req.body.event_state;
    const event_city = req.body.event_city;
    const event_title = req.body.event_title;
    const event_description = req.body.event_description;
    const your_name = req.body.your_name;
    const your_email = req.body.your_email;
    const your_phone = req.body.your_phone;
    const your_city = req.body.your_city;
    const your_state = req.body.your_state;
    const victim_name = req.body.victim_name;
    const victim_gender = req.body.victim_gender;
    const victim_race = req.body.victim_race;
    const victim_age = req.body.victim_age;
    const victim_details  = req.body.victim_details;
    const offender_name = req.body.offender_name;
    const offender_gender = req.body.offender_gender;
    const offender_race = req.body.offender_race;
    const offender_age = req.body.offender_age;
    const offender_details = req.body.offender_details;
    const other_details = req.body.other_details;
    const was_reported = req.body.was_reported;
    const reported_to = req.body.reported_to;
    const has_news_coverage = req.body.has_news_coverage;
    const news_coverage_details = req.body.news_coverage_details;
    const victim_id =  req.body.victim_id;
    const offender_id = req.body.offender_id;
    const victim_ids = [victim_id];
    const offender_ids = [offender_id];
    const communities = req.body.communities;
  

    const offender_query = {
      text: 'INSERT INTO offenders(offender_name, offender_gender, offender_race, offender_age, offender_details, incident_id) VALUES($1, $2, $3, $4, $5, $6, $7)',
      values: [offender_id, offender_name, offender_gender, offender_race, offender_age, offender_details, id],
    }

    client.query(offender_query, function(err, result) {
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
