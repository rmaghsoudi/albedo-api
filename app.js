var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var port = process.env.PORT || 3000;

var jwtCheck = jwt({
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

app.use(jwtCheck);

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.listen(port);