import express from 'express';
import { jwtCheck } from './src/middleware/auth';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

// mongoose connection
// states that we're going to wait for a response from mongodb
mongoose.Promise = global.Promise
mongoose.connect(
    `mongodb+srv://romy:${process.env.MONGO_DB_PASS}@albedo-iq6jj.gcp.mongodb.net/test?retryWrites=true&w=majority`, 
    { // options to remove deprecation warnings
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err) => {
      if (err) { console.log(`DB Connection Error: ${err.message}`) }
      else { console.log("Connected to database!") }
    });


// configure body parser to work with JSON and gets rid of warnings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Applying JWT middleware to the whole application rather than specific routes
app.use(jwtCheck);

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`)
});