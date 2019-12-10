const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

export const jwtCheck = jwt({
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