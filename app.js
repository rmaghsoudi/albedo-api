import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRoutes from './src/routes/userRoutes';
import entryRoutes from './src/routes/entryRoutes';
import exerciseRoutes from './src/routes/exerciseRoutes';
import testRoutes from './src/routes/testRoutes';

// Dotenv configuration to access environment variables
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
// app.use(jwtCheck);

// Set up all the routes for the app
userRoutes(app);
entryRoutes(app);
exerciseRoutes(app);
testRoutes(app);

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`)
});