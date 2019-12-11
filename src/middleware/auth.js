import jwt from 'express-jwt';
import jwks from 'jwks-rsa';

const authConfig = {
  domain: "dev-bd5b69sr.auth0.com",
  audience: "http://localhost:3000/api"
};

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
}),
audience: authConfig.audience,
issuer: `https://${authConfig.domain}/`,
algorithms: ['RS256']
});