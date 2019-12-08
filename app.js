const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

const port = process.env.PORT || 3000;

mongoose
  .connect(
      "mongodb+srv://romy:" +
        process.env.MONGO_ATLAS_PW  +
      "@cluster0-iq6jj.gcp.mongodb.net/test?retryWrites=true&w=majority",
      { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-bd5b69sr.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000/api',
  issuer: 'https://dev-bd5b69sr.auth0.com/',
  algorithms: ['RS256']
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);