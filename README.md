# Skelleton of application for hackathon

 ### Get started
- Fork or download the repo
 ### Install dependencies
- `npm install`
 ### Set up credentials to reach the database
- Create a `.env` file similar to the `.env.example`
- Include your PostgreSQL username, password (if you have one for local host), database and port.

### Go into your local host, and run the following table creation & seed query:
    CREATE TABLE form_submissions (
    id uuid,
    name varchar(500),
    email varchar(500),
    event_category varchar(500),
    event_date timestamp,
    state varchar(50),
    city varchar(100),
    event_description varchar(1000),
    created_on timestamp
    );

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    INSERT INTO form_submissions VALUES (uuid_generate_v1(), 'alda', 'alda@foo.com', 'police_brutality', CAST('2020-01-01' as timestamp), 'NY', 'NYC', 'unnecessary search of my car', NOW());

 ### Start your API
- `node api.js` 
- API local endpoint: http://localhost:8000/api.json

 ### Start your Application
- `npm start` 
- App starts on: http://localhost:3000/
